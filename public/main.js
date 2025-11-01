const state = {
  language: 'en',
  currency: 'USD',
  rate: 0.000064,
  basePrices: {
    cinnamon: 18,
    nutmeg: 22,
    vanilla: 35,
  },
  formatter: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
};

const translations = {
  en: {
    navProducts: 'Our Products',
    navTeam: 'Our Team',
    navAbout: 'About',
    navReviews: 'Our Reviews',
    ctaSelect: 'Product Selection',
    heroBadge: 'Premium Indonesian Spices',
    heroTitle: 'Elevate your culinary creations with sustainable spices.',
    heroSubtitle:
      'From nutmeg to vanilla beans, we connect you with the finest ingredients sourced directly from Indonesian farmers.',
    heroDiscover: 'Discover Products',
    heroSelect: 'Order Now',
    aboutTitle: 'Why PT Nusa Spice Global?',
    aboutParagraph1:
      'We partner with trusted cooperatives across the Indonesian archipelago to deliver traceable, high-grade spices to global brands, hotels, and boutique retailers.',
    aboutParagraph2:
      'Our supply chain combines ethical farming, modern quality assurance, and dependable logistics so every shipment arrives fresh, fragrant, and on time.',
    statClients: 'Global clients trust us',
    statCountries: 'Countries served worldwide',
    statSatisfaction: 'Client satisfaction score',
    productsTitle: 'Our Products',
    productsSubtitle: 'Curated selections tailored for culinary professionals, packaged to maintain aroma and potency.',
    productCinnamon: 'Organic Cassia Cinnamon',
    productCinnamonDesc: 'Sustainably grown in West Sumatra with bold sweetness ideal for beverages and baking.',
    productNutmeg: 'Premium Nutmeg & Mace',
    productNutmegDesc: 'Whole nutmeg seeds and mace blades from Banda Islands, carefully graded for export.',
    productVanilla: 'Bourbon Vanilla Beans',
    productVanillaDesc: 'Hand-cured beans with high vanillin content for gourmet desserts and specialty beverages.',
    promoTitle: 'Seasonal Promotions',
    promoSubtitle:
      'Limited harvest lots and volume-based discounts are available. Upload your promo assets later through the assets folder to personalize this section.',
    promoPoint1: 'Lock your price with early-bird booking programs.',
    promoPoint2: 'Bundle cinnamon, cloves, and nutmeg for exclusive rates.',
    promoPoint3: 'Complimentary cupping kits for new wholesale partners.',
    teamTitle: 'Our Team',
    teamSubtitle:
      'Dedicated professionals bridging Indonesian farmers and global culinary brands. Replace the placeholders with official portraits in assets/img/.',
    teamRole1: 'Chief Executive Officer',
    teamRole2: 'Chief Operations Officer',
    teamRole3: 'Director of Global Sales',
    reviewsTitle: 'Our Reviews',
    reviewsSubtitle: 'Hear from our partners around the globe.',
    review1:
      '“The freshness and consistency of PT Nusa Spice Global’s nutmeg keeps our dessert program unforgettable.”',
    review2:
      '“Reliable logistics and transparent sourcing make them our preferred partner for premium spice blends.”',
    review3: '“Their team co-created custom packaging for our retail line and delivered ahead of schedule.”',
    footerTagline: 'Delivering Indonesian heritage through world-class spices.',
    footerContact: 'Contact',
    footerSocial: 'Connect',
    modalTitle: 'Product Selection',
    modalSubtitle: 'Complete the form to receive a tailored quotation.',
    labelName: 'Name',
    labelEmail: 'Email',
    labelPhone: 'Phone Number / WhatsApp',
    labelAddress: 'Address',
    labelNotes: 'Notes',
    labelPromo: 'Promo Code',
    labelUnit: 'Unit',
    labelQuantity: 'Quantity',
    labelProduct: 'Product',
    summaryProduct: 'Product Total',
    summaryShipping: 'Estimated Shipping',
    summaryDelivery: 'Estimated Delivery',
    summaryGrand: 'Grand Total',
    btnPay: 'Pay with IpayMu',
    formDisclaimer: 'Secure transactions powered by IpayMu. You will be redirected to complete payment.',
  },
  id: {
    navProducts: 'Produk Kami',
    navTeam: 'Tim Kami',
    navAbout: 'Tentang',
    navReviews: 'Ulasan',
    ctaSelect: 'Pilih Produk',
    heroBadge: 'Rempah Premium Indonesia',
    heroTitle: 'Lengkapi kreasi kuliner Anda dengan rempah berkelanjutan.',
    heroSubtitle:
      'Dari pala hingga vanila, kami menghadirkan bahan terbaik langsung dari petani Indonesia.',
    heroDiscover: 'Lihat Produk',
    heroSelect: 'Pesan Sekarang',
    aboutTitle: 'Mengapa PT Nusa Spice Global?',
    aboutParagraph1:
      'Kami bermitra dengan koperasi terpercaya di seluruh nusantara untuk menghadirkan rempah berkelas tinggi bagi merek global, hotel, dan ritel butik.',
    aboutParagraph2:
      'Rantai pasok kami memadukan pertanian etis, jaminan kualitas modern, dan logistik andal agar setiap pengiriman tiba segar dan tepat waktu.',
    statClients: 'Klien global mempercayai kami',
    statCountries: 'Negara yang kami layani',
    statSatisfaction: 'Skor kepuasan klien',
    productsTitle: 'Produk Kami',
    productsSubtitle: 'Pilihan istimewa untuk profesional kuliner, dikemas untuk menjaga aroma dan rasa.',
    productCinnamon: 'Kayu Manis Cassia Organik',
    productCinnamonDesc: 'Ditanam berkelanjutan di Sumatra Barat dengan rasa manis kuat cocok untuk minuman dan pastry.',
    productNutmeg: 'Pala & Bunga Pala Premium',
    productNutmegDesc: 'Pala utuh dan fuli dari Kepulauan Banda dengan grading ekspor.',
    productVanilla: 'Vanili Bourbon',
    productVanillaDesc: 'Diproses secara manual dengan kandungan vanilin tinggi untuk dessert dan minuman spesial.',
    promoTitle: 'Promo Musiman',
    promoSubtitle:
      'Stok panen terbatas dan diskon volume tersedia. Tambahkan aset promo Anda nanti melalui folder assets untuk menyesuaikan bagian ini.',
    promoPoint1: 'Amankan harga melalui program pemesanan lebih awal.',
    promoPoint2: 'Paket kayu manis, cengkeh, dan pala dengan harga eksklusif.',
    promoPoint3: 'Gratis kit cupping untuk mitra grosir baru.',
    teamTitle: 'Tim Kami',
    teamSubtitle:
      'Profesional yang menjembatani petani Indonesia dan merek kuliner global. Ganti placeholder dengan foto resmi di assets/img/.',
    teamRole1: 'Direktur Utama',
    teamRole2: 'Direktur Operasional',
    teamRole3: 'Direktur Penjualan Global',
    reviewsTitle: 'Ulasan',
    reviewsSubtitle: 'Testimoni mitra kami di seluruh dunia.',
    review1: '“Kesegaran dan konsistensi pala PT Nusa Spice Global membuat dessert kami selalu berkesan.”',
    review2: '“Logistik yang andal dan sumber yang transparan menjadikan mereka mitra utama kami.”',
    review3: '“Tim mereka menyesuaikan kemasan ritel kami dan mengirim lebih cepat dari jadwal.”',
    footerTagline: 'Mewariskan cita rasa Indonesia ke seluruh dunia.',
    footerContact: 'Kontak',
    footerSocial: 'Terhubung',
    modalTitle: 'Form Pemilihan Produk',
    modalSubtitle: 'Lengkapi formulir untuk mendapatkan penawaran khusus.',
    labelName: 'Nama',
    labelEmail: 'Email',
    labelPhone: 'Nomor Telepon / WhatsApp',
    labelAddress: 'Alamat',
    labelNotes: 'Catatan',
    labelPromo: 'Kode Promo',
    labelUnit: 'Satuan',
    labelQuantity: 'Jumlah',
    labelProduct: 'Produk',
    summaryProduct: 'Total Produk',
    summaryShipping: 'Estimasi Ongkir',
    summaryDelivery: 'Estimasi Pengiriman',
    summaryGrand: 'Total Keseluruhan',
    btnPay: 'Bayar dengan IpayMu',
    formDisclaimer: 'Transaksi aman melalui IpayMu. Anda akan diarahkan untuk menyelesaikan pembayaran.',
  },
};

const selectors = {
  nameInput: document.getElementById('name'),
  emailInput: document.getElementById('email'),
  modal: document.getElementById('product-modal'),
  modalOverlay: document.getElementById('modal-overlay'),
  modalClose: document.getElementById('modal-close'),
  productSelector: document.getElementById('product-selector'),
  heroSelect: document.getElementById('hero-select'),
  form: document.getElementById('selection-form'),
  unitInput: document.getElementById('quantityUnit'),
  quantityInput: document.getElementById('quantityValue'),
  productInput: document.getElementById('product'),
  addressInput: document.getElementById('address'),
  summaryProduct: document.getElementById('summary-product'),
  summaryShipping: document.getElementById('summary-shipping'),
  summaryDelivery: document.getElementById('summary-delivery'),
  summaryTotal: document.getElementById('summary-total'),
  payButton: document.getElementById('pay-button'),
};

function setLanguage(language) {
  state.language = language;
  const strings = translations[language] || translations.en;
  document.documentElement.lang = language === 'id' ? 'id' : 'en';
  document.querySelectorAll('[data-translate]').forEach((node) => {
    const key = node.getAttribute('data-translate');
    if (strings[key]) {
      node.textContent = strings[key];
    }
  });
  selectors.payButton.textContent = strings.btnPay;
  state.formatter = new Intl.NumberFormat(language === 'id' ? 'id-ID' : 'en-US', {
    style: 'currency',
    currency: state.currency,
  });
  updateSummary();
}

function setCurrency(currency) {
  state.currency = currency;
  state.formatter = new Intl.NumberFormat(state.language === 'id' ? 'id-ID' : 'en-US', {
    style: 'currency',
    currency,
  });
  document.querySelectorAll('.card__price span').forEach((span) => {
    const priceInUsd = Number(span.dataset.price);
    const price = currency === 'IDR' ? priceInUsd * 15000 : priceInUsd;
    span.textContent = `${state.formatter.format(price)} / kg`;
  });
  Array.from(selectors.productInput.options).forEach((option) => {
    const priceUsd = Number(option.dataset.price);
    option.dataset.base = currency === 'IDR' ? priceUsd * 15000 : priceUsd;
  });
  updateSummary();
}

async function detectLocale() {
  try {
    const response = await fetch('/api/geo', { cache: 'no-store' });
    if (!response.ok) throw new Error('server geo unavailable');
    const data = await response.json();
    state.rate = data.rate || state.rate;
    setCurrency(data.currency === 'IDR' ? 'IDR' : 'USD');
    setLanguage(data.language === 'id' ? 'id' : 'en');
  } catch (error) {
    try {
      const fallback = await fetch('https://ipapi.co/json/');
      const data = await fallback.json();
      const isIndonesian = data.country_code === 'ID';
      setCurrency(isIndonesian ? 'IDR' : 'USD');
      setLanguage(isIndonesian ? 'id' : 'en');
    } catch (innerError) {
      console.warn('Geo lookup failed', innerError);
      setCurrency('USD');
      setLanguage('en');
    }
  }
}

function openModal() {
  selectors.modal.classList.add('active');
  selectors.modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  selectors.nameInput?.focus?.();
}

function closeModal() {
  selectors.modal.classList.remove('active');
  selectors.modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function getQuantityInKg(value, unit) {
  if (unit === 'gram') return value / 1000;
  if (unit === 'ton') return value * 1000;
  return value;
}

function adjustQuantityLimits() {
  const unit = selectors.unitInput.value;
  const value = Number(selectors.quantityInput.value) || 1;
  if (unit === 'kg') {
    selectors.quantityInput.max = 10;
  } else if (unit === 'gram') {
    selectors.quantityInput.max = 10000;
  } else if (unit === 'ton') {
    selectors.quantityInput.max = 10;
  }
  if (value > selectors.quantityInput.max) {
    selectors.quantityInput.value = selectors.quantityInput.max;
  }
  updateSummary();
}

function getSelectedBasePrice() {
  const option = selectors.productInput.selectedOptions[0];
  const base = option.dataset.base ? Number(option.dataset.base) : Number(option.dataset.price);
  return base;
}

let estimateTimer;
function handleAddressChange() {
  clearTimeout(estimateTimer);
  estimateTimer = setTimeout(() => {
    updateSummary();
  }, 500);
}

async function requestEstimate(payload) {
  try {
    const response = await fetch('/api/estimate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('estimate api unavailable');
    return await response.json();
  } catch (error) {
    const shippingResult = fallbackEstimate(payload);
    return shippingResult;
  }
}

function fallbackEstimate({ quantityValue, quantityUnit, address, basePrice }) {
  const quantityInKg = quantityUnit === 'gram' ? quantityValue / 1000 : quantityUnit === 'ton' ? quantityValue * 1000 : quantityValue;
  const rate = quantityUnit === 'gram' ? 0.5 : quantityUnit === 'ton' ? 120 : 3.5;
  let shipping = quantityInKg * rate;
  if (/jakarta/i.test(address)) shipping *= 0.7;
  if (/surabaya/i.test(address)) shipping *= 0.8;
  const deliveryDays = quantityInKg > 500 ? 14 : quantityInKg > 100 ? 10 : 5;
  const productTotal = basePrice * quantityInKg;
  const total = productTotal + shipping;
  return {
    shipping,
    deliveryDays,
    productTotal,
    total,
  };
}

let currentEstimate = null;
async function updateSummary() {
  const quantityValue = Number(selectors.quantityInput.value) || 1;
  const quantityUnit = selectors.unitInput.value;
  const address = selectors.addressInput.value;
  const basePrice = getSelectedBasePrice();
  const quantityInKg = getQuantityInKg(quantityValue, quantityUnit);
  const payload = { quantityValue, quantityUnit, address, basePrice };
  currentEstimate = await requestEstimate(payload);
  const formatter = state.formatter;

  const productTotal = currentEstimate.productTotal ?? basePrice * quantityInKg;
  const shipping = currentEstimate.shipping ?? 0;
  const total = currentEstimate.total ?? productTotal + shipping;

  selectors.summaryProduct.textContent = formatter.format(productTotal);
  selectors.summaryShipping.textContent = formatter.format(shipping);
  selectors.summaryDelivery.textContent = currentEstimate.deliveryDays
    ? `${currentEstimate.deliveryDays} ${state.language === 'id' ? 'hari' : 'days'}`
    : '-';
  selectors.summaryTotal.textContent = formatter.format(total);
}

function getFormData() {
  const formData = new FormData(selectors.form);
  const data = Object.fromEntries(formData.entries());
  const quantityValue = Number(data.quantityValue) || 1;
  const quantityUnit = data.quantityUnit;
  const quantityInKg = getQuantityInKg(quantityValue, quantityUnit);
  const basePrice = getSelectedBasePrice();
  return {
    ...data,
    quantityValue,
    quantityUnit,
    quantityInKg,
    basePrice,
    currency: state.currency,
    language: state.language,
    productTotal: currentEstimate?.productTotal || basePrice * quantityInKg,
    shipping: currentEstimate?.shipping || 0,
    total: currentEstimate?.total || basePrice * quantityInKg,
  };
}

function showNotification(message, type = 'info') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.dataset.type = type;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 4000);
}

async function handleSubmit(event) {
  event.preventDefault();
  const formData = getFormData();

  if (!selectors.form.reportValidity()) {
    return;
  }

  selectors.payButton.disabled = true;
  selectors.payButton.dataset.loading = 'true';
  showNotification(state.language === 'id' ? 'Memproses pembayaran…' : 'Processing payment…');

  try {
    const response = await fetch('/api/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Payment service unavailable');
    }

    const data = await response.json();

    if (data.redirectUrl) {
      showNotification(state.language === 'id' ? 'Mengalihkan ke IpayMu…' : 'Redirecting to IpayMu…', 'success');
      window.open(data.redirectUrl, '_blank');
    } else {
      showNotification(state.language === 'id' ? 'Permintaan pembayaran dikirim.' : 'Payment request sent.', 'success');
    }

    if (data.status === 'mock') {
      const message = encodeURIComponent(
        `Order Request - PT Nusa Spice Global%0AName: ${formData.name}%0APhone: ${formData.phone}%0AProduct: ${selectors.productInput.selectedOptions[0].text}%0AQuantity: ${formData.quantityValue} ${formData.quantityUnit}%0ATotal: ${state.formatter.format(formData.total)}`
      );
      window.open(`https://wa.me/6289607959579?text=${message}`, '_blank');
      window.location.href = `mailto:hello@nusaspiceglobal.com?subject=New%20Order&body=${message}`;
    }
  } catch (error) {
    console.error(error);
    showNotification(
      state.language === 'id'
        ? 'Gagal memproses pembayaran. Silakan coba lagi.'
        : 'Failed to process payment. Please try again.',
      'error'
    );
  } finally {
    selectors.payButton.disabled = false;
    selectors.payButton.dataset.loading = 'false';
  }
}

function setupNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  document.querySelectorAll('.nav__links a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

function setupAnimations() {
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.animate-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
          },
        }
      );
    });
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-in');
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'none';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el));
  }
}

function setupModal() {
  selectors.productSelector.addEventListener('click', openModal);
  selectors.heroSelect.addEventListener('click', openModal);
  selectors.modalOverlay.addEventListener('click', closeModal);
  selectors.modalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function setupForm() {
  selectors.unitInput.addEventListener('change', adjustQuantityLimits);
  selectors.quantityInput.addEventListener('input', updateSummary);
  selectors.productInput.addEventListener('change', updateSummary);
  selectors.addressInput.addEventListener('input', handleAddressChange);
  selectors.form.addEventListener('submit', handleSubmit);
}

function setupFooterYear() {
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();
}

function setupAccessibility() {
  selectors.modal.addEventListener('transitionend', () => {
    if (!selectors.modal.classList.contains('active')) {
      selectors.productSelector.focus();
    }
  });
}

function registerToastStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0f172a;
      color: #f8fafc;
      padding: 1rem 1.4rem;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.3);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 9999;
      font-size: 0.95rem;
    }
    .toast.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .toast[data-type='error'] {
      background: #b91c1c;
    }
    .toast[data-type='success'] {
      background: #047857;
    }
  `;
  document.head.appendChild(style);
}

function init() {
  setupNav();
  setupAnimations();
  setupModal();
  setupForm();
  setupFooterYear();
  setupAccessibility();
  registerToastStyles();
  adjustQuantityLimits();
  detectLocale();
  updateSummary();
}

document.addEventListener('DOMContentLoaded', init);
