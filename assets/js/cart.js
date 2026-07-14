// ===== CART MANAGEMENT =====
function getCart() {
  try { return JSON.parse(localStorage.getItem('tokokita_cart')) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('tokokita_cart', JSON.stringify(cart));
  updateCartUI();
}
function updateCartUI() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount, #floatCount').forEach(el => {
    if (el) el.textContent = count;
  });
}
function addToCartById(id, qty = 1, size = null, color = null) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  const cart = getCart();
  const key = `${id}-${size || 'default'}-${color || 'default'}`;
  const existing = cart.find(i => i.key === key);
  if (existing) { existing.qty += qty; }
  else {
    cart.push({
      key, id, qty,
      name: p.name, brand: p.brand, price: p.price,
      image: p.images[0], size: size || (p.sizes[0] || 'ONE SIZE'),
      color: color || (p.colors[0] || '#000')
    });
  }
  saveCart(cart);
  showToast(`✅ ${p.name} ditambahkan ke keranjang`, 'success');
}
function removeFromCart(key) {
  let cart = getCart().filter(i => i.key !== key);
  saveCart(cart);
}
function updateCartQty(key, qty) {
  let cart = getCart();
  const item = cart.find(i => i.key === key);
  if (item) {
    if (qty <= 0) cart = cart.filter(i => i.key !== key);
    else item.qty = qty;
  }
  saveCart(cart);
}
function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

// ===== WISHLIST =====
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('tokokita_wish')) || []; }
  catch { return []; }
}
function toggleWish(id, btn) {
  let wish = getWishlist();
  if (wish.includes(id)) {
    wish = wish.filter(i => i !== id);
    if (btn) { btn.classList.remove('active'); btn.querySelector('i').className = 'far fa-heart'; }
    showToast('Dihapus dari wishlist', 'info');
  } else {
    wish.push(id);
    if (btn) { btn.classList.add('active'); btn.querySelector('i').className = 'fas fa-heart'; }
    showToast('❤️ Ditambahkan ke wishlist', 'success');
  }
  localStorage.setItem('tokokita_wish', JSON.stringify(wish));
  const wc = document.getElementById('wishCount');
  if (wc) wc.textContent = wish.length;
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-info-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  const wish = getWishlist();
  const wc = document.getElementById('wishCount');
  if (wc) wc.textContent = wish.length;
  // Sticky nav
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });
});
