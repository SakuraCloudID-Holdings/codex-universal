const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const requestIp = require('request-ip');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestIp.mw());

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (path.extname(filePath) === '.html') {
      res.setHeader('Cache-Control', 'no-cache');
    }
  },
}));

const DEFAULT_RATE = 0.000064; // 1 IDR to USD approx (1 USD ~ 15500 IDR)

async function resolveGeoData(ip) {
  try {
    const targetIp = ip && ip !== '::1' && ip !== '127.0.0.1' ? ip : '';
    const url = targetIp ? `https://ipapi.co/${targetIp}/json/` : 'https://ipapi.co/json/';
    const { data } = await axios.get(url, { timeout: 5000 });

    if (!data || data.error) {
      return {
        language: 'en',
        currency: 'USD',
        rate: DEFAULT_RATE,
        country: 'US',
      };
    }

    const isIndonesian = data.country === 'Indonesia' || data.country_code === 'ID';
    return {
      language: isIndonesian ? 'id' : 'en',
      currency: isIndonesian ? 'IDR' : 'USD',
      rate: data.currency === 'IDR' ? DEFAULT_RATE : 1,
      country: data.country_code || 'US',
    };
  } catch (error) {
    console.error('geo lookup failed', error.message);
    return {
      language: 'en',
      currency: 'USD',
      rate: DEFAULT_RATE,
      country: 'US',
    };
  }
}

app.get('/api/geo', async (req, res) => {
  const ip = req.clientIp;
  const geo = await resolveGeoData(ip);
  res.json(geo);
});

function computeShipping({ quantityValue, quantityUnit, address }) {
  const baseRates = {
    gram: 0.5,
    kg: 3.5,
    ton: 120,
  };
  const quantityInKg = quantityUnit === 'gram'
    ? quantityValue / 1000
    : quantityUnit === 'ton'
      ? quantityValue * 1000
      : quantityValue;

  const rate = baseRates[quantityUnit] || baseRates.kg;
  let shipping = quantityInKg * rate;

  if (/jakarta/i.test(address)) shipping *= 0.7;
  if (/surabaya/i.test(address)) shipping *= 0.8;
  if (/usa|united states|california/i.test(address)) shipping *= 1.8;

  const deliveryDays = quantityInKg > 500 ? 14 : quantityInKg > 100 ? 10 : 5;

  return {
    shipping: Number(shipping.toFixed(2)),
    deliveryDays,
    quantityInKg,
  };
}

app.post('/api/estimate', async (req, res) => {
  try {
    const { quantityValue, quantityUnit, address, basePrice } = req.body;
    if (!quantityValue || !quantityUnit) {
      return res.status(400).json({ message: 'Quantity is required.' });
    }
    const { shipping, deliveryDays, quantityInKg } = computeShipping({ quantityValue, quantityUnit, address: address || '' });
    const productTotal = Number((Number(basePrice || 0) * quantityInKg).toFixed(2));
    const total = Number((productTotal + shipping).toFixed(2));
    res.json({ shipping, deliveryDays, productTotal, total, quantityInKg });
  } catch (error) {
    console.error('estimate error', error);
    res.status(500).json({ message: 'Unable to calculate estimate at this time.' });
  }
});

async function triggerWhatsApp(summary) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const adminNumber = process.env.WHATSAPP_ADMIN || '6289607959579';

  if (!token || !phoneId) {
    console.warn('WhatsApp credentials missing. Skipping WhatsApp notification.');
    return { skipped: true };
  }

  const payload = {
    messaging_product: 'whatsapp',
    to: adminNumber,
    type: 'text',
    text: {
      body: summary,
    },
  };

  const url = `https://graph.facebook.com/v17.0/${phoneId}/messages`;
  await axios.post(url, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return { success: true };
}

async function triggerEmail(summary, form) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, ADMIN_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !ADMIN_EMAIL) {
    console.warn('SMTP credentials missing. Skipping email notification.');
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `PT Nusa Spice Global <${SMTP_USER}>`,
    to: ADMIN_EMAIL,
    subject: 'New PT Nusa Spice Global Order',
    text: summary,
    html: `<pre>${summary}</pre>` +
      `<p><strong>Raw Form Data</strong></p><pre>${JSON.stringify(form, null, 2)}</pre>`,
  });

  return { success: true };
}

function buildOrderSummary(form, paymentResponse) {
  return [
    'New order received via PT Nusa Spice Global landing page',
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone/WhatsApp: ${form.phone}`,
    `Address: ${form.address}`,
    `Notes: ${form.notes || '-'}`,
    `Promo Code: ${form.promoCode || '-'}`,
    `Quantity: ${form.quantityValue} ${form.quantityUnit}`,
    `Product Total: ${form.currency} ${form.productTotal}`,
    `Shipping: ${form.currency} ${form.shipping}`,
    `Grand Total: ${form.currency} ${form.total}`,
    paymentResponse?.SessionID ? `Payment Session: ${paymentResponse.SessionID}` : '',
    paymentResponse?.Url ? `Payment URL: ${paymentResponse.Url}` : '',
  ].filter(Boolean).join('\n');
}

app.post('/api/pay', async (req, res) => {
  const form = req.body;
  const { IPAYMU_VA, IPAYMU_API_KEY, IPAYMU_SANDBOX } = process.env;

  if (!IPAYMU_VA || !IPAYMU_API_KEY) {
    console.warn('Ipaymu credentials missing. Returning mock payment response.');
    const summary = buildOrderSummary(form, { Url: 'https://sandbox.ipaymu.com/payment' });
    await triggerWhatsApp(summary);
    await triggerEmail(summary, form);
    return res.json({
      status: 'mock',
      message: 'Payment gateway credentials not configured. Mock response generated.',
      redirectUrl: 'https://sandbox.ipaymu.com/payment',
    });
  }

  try {
    const timestamp = Date.now();
    const body = {
      product: [form.productName || 'PT Nusa Spice Global Product'],
      qty: [Number(form.quantityValue)],
      price: [Number(form.unitPrice || form.basePrice || 0)],
      amount: Number(form.total),
      notifyUrl: form.notifyUrl || process.env.IPAYMU_NOTIFY_URL || '',
      returnUrl: form.returnUrl || process.env.IPAYMU_RETURN_URL || '',
      cancelUrl: form.cancelUrl || process.env.IPAYMU_CANCEL_URL || '',
      buyerName: form.name,
      buyerEmail: form.email,
      buyerPhone: form.phone,
      referenceId: `NSG-${timestamp}`,
      paymentMethod: 'va',
    };

    const serialized = JSON.stringify(body);
    const stringToSign = `${IPAYMU_VA}:${serialized}:${IPAYMU_API_KEY}`;
    const hash = crypto.createHash('sha256').update(stringToSign).digest('hex');

    const endpoint = IPAYMU_SANDBOX === 'false'
      ? 'https://my.ipaymu.com/api/v2/payment'
      : 'https://sandbox.ipaymu.com/api/v2/payment';

    const response = await axios.post(endpoint, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        va: IPAYMU_VA,
        signature: hash,
        timestamp: timestamp,
      },
    });

    const summary = buildOrderSummary(form, response.data?.Data);
    await triggerWhatsApp(summary);
    await triggerEmail(summary, form);

    res.json({
      status: 'success',
      redirectUrl: response.data?.Data?.Url,
      data: response.data,
    });
  } catch (error) {
    console.error('Payment error', error?.response?.data || error.message);
    res.status(500).json({
      status: 'error',
      message: 'Unable to process payment. Please try again later.',
      details: error?.response?.data || error.message,
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`PT Nusa Spice Global landing page running on port ${PORT}`);
});
