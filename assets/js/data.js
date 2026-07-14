// ===== TOKOKITA PRODUCT DATA =====
const PRODUCTS = [
  {
    id: 1, name: 'Dress Batik Floral Modern', brand: 'BatikNusa Studio',
    price: 189000, oldPrice: 280000, rating: 4.8, reviews: 234,
    badge: 'SALE', category: 'wanita', subcat: 'Batik',
    isNew: false, isSale: true, isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&q=80'
    ],
    colors: ['#8B4513','#2F4F4F','#800020'],
    sizes: ['XS','S','M','L','XL','XXL'],
    stock: 45,
    description: 'Dress batik modern dengan motif floral eksklusif yang terinspirasi dari kekayaan alam Nusantara. Dibuat dari bahan katun premium yang nyaman dipakai seharian. Cocok untuk acara formal maupun kasual.',
    details: ['Bahan: 100% Katun Premium', 'Teknik: Batik Tulis & Cap', 'Motif: Floral Kawung Modern', 'Perawatan: Cuci tangan, jemur terbalik', 'Origin: Yogyakarta, Indonesia'],
    sold: 1200, tags: ['batik','dress','wanita','modern']
  },
  {
    id: 2, name: 'Kemeja Tenun Lombok Premium', brand: 'Tenun Indah',
    price: 265000, oldPrice: null, rating: 4.6, reviews: 118,
    badge: 'NEW', category: 'pria', subcat: 'Kemeja',
    isNew: true, isSale: false, isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4d3b?w=700&q=80'
    ],
    colors: ['#1a3a5c','#5c3a1a','#2d4a1e'],
    sizes: ['S','M','L','XL','XXL'],
    stock: 28,
    description: 'Kemeja tenun tangan dari Lombok dengan motif geometris khas Sasak. Setiap helai dibuat oleh pengrajin terampil menggunakan alat tenun tradisional ATBM (Alat Tenun Bukan Mesin).',
    details: ['Bahan: Benang Sutra & Katun Natural', 'Teknik: Tenun Tangan ATBM', 'Motif: Geometris Sasak', 'Perawatan: Dry clean', 'Origin: Lombok, Nusa Tenggara Barat'],
    sold: 540, tags: ['tenun','kemeja','pria','lombok']
  },
  {
    id: 3, name: 'Tas Anyaman Rotan Bali', brand: 'BaliCraft Artisan',
    price: 145000, oldPrice: 195000, rating: 4.9, reviews: 89,
    badge: 'HOT', category: 'aksesori', subcat: 'Tas',
    isNew: false, isSale: true, isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=700&q=80'
    ],
    colors: ['#C4A265','#8B7355'],
    sizes: ['ONE SIZE'],
    stock: 62,
    description: 'Tas anyaman rotan premium buatan tangan pengrajin Bali. Menggunakan rotan pilihan yang dikeringkan secara alami, kemudian dianyam dengan teknik tradisional yang telah diwariskan turun-temurun.',
    details: ['Bahan: Rotan Alam Pilihan', 'Teknik: Anyam Tangan Tradisional', 'Dimensi: 35 x 25 x 12 cm', 'Kapasitas: ~8 liter', 'Origin: Bali, Indonesia'],
    sold: 890, tags: ['tas','rotan','aksesori','bali']
  },
  {
    id: 4, name: 'Blouse Tenun Flores Colorful', brand: 'Flores Weave',
    price: 220000, oldPrice: null, rating: 4.5, reviews: 67,
    badge: null, category: 'wanita', subcat: 'Blouse',
    isNew: true, isSale: false, isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700&q=80'
    ],
    colors: ['#c0392b','#2980b9','#f39c12'],
    sizes: ['XS','S','M','L','XL'],
    stock: 19,
    description: 'Blouse modern dengan kain tenun ikat khas Flores yang penuh warna. Memadukan estetika tradisional Ende-Lio dengan potongan kontemporer yang cocok untuk berbagai kesempatan.',
    details: ['Bahan: Tenun Ikat Flores', 'Motif: Naga & Geometris Khas Ende', 'Potongan: Semi-formal, loose fit', 'Perawatan: Cuci tangan dengan sabun lembut', 'Origin: Flores, NTT'],
    sold: 312, tags: ['tenun','blouse','wanita','flores']
  },
  {
    id: 5, name: 'Sandal Kulit Jogja Handmade', brand: 'LeatherJogja',
    price: 178000, oldPrice: 240000, rating: 4.8, reviews: 145,
    badge: 'SALE', category: 'sepatu', subcat: 'Sandal',
    isNew: false, isSale: true, isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&q=80'
    ],
    colors: ['#8B4513','#1C1C1C','#C4A265'],
    sizes: ['37','38','39','40','41','42','43'],
    stock: 34,
    description: 'Sandal kulit sapi asli buatan tangan pengrajin Kotagede, Yogyakarta. Dikerjakan oleh ahli kulit berpengalaman dengan detail jahitan yang kuat dan sol karet anti-slip berkualitas tinggi.',
    details: ['Bahan Upper: Kulit Sapi Full Grain', 'Sol: Karet Alam Anti-Slip', 'Jahitan: Welt Stitching Manual', 'Finishing: Natural Oil Conditioner', 'Origin: Kotagede, Yogyakarta'],
    sold: 1560, tags: ['sandal','kulit','sepatu','jogja']
  },
  {
    id: 6, name: 'Baju Batik Anak Motif Parang', brand: 'BatikKids',
    price: 95000, oldPrice: null, rating: 4.4, reviews: 56,
    badge: 'NEW', category: 'anak', subcat: 'Batik',
    isNew: true, isSale: false, isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=700&q=80'
    ],
    colors: ['#1a3a5c','#8B4513','#2d4a1e'],
    sizes: ['2-3 Thn','4-5 Thn','6-7 Thn','8-9 Thn','10-11 Thn','12 Thn'],
    stock: 88,
    description: 'Baju batik anak dengan motif parang yang elegan dan berkelas. Bahan katun halus yang lembut di kulit anak, mudah dicuci, dan tidak mudah luntur. Cocok untuk acara formal maupun hari batik nasional.',
    details: ['Bahan: Katun Combed 30s', 'Motif: Parang Rusak Barong', 'Warna: Tidak luntur (OEKO-TEX certified)', 'Perawatan: Cuci mesin dengan air dingin', 'Origin: Solo, Jawa Tengah'],
    sold: 245, tags: ['batik','anak','parang','kids']
  },
  {
    id: 7, name: 'Rok Tenun Toraja Eksklusif', brand: 'Toraja Craft',
    price: 310000, oldPrice: 420000, rating: 5.0, reviews: 201,
    badge: 'SALE', category: 'wanita', subcat: 'Rok',
    isNew: false, isSale: true, isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=700&q=80',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=80'
    ],
    colors: ['#8B0000','#1a1a2e','#8B4513'],
    sizes: ['XS','S','M','L','XL'],
    stock: 12,
    description: 'Rok panjang dengan kain tenun tradisional Toraja yang bernilai seni tinggi. Setiap kain dikerjakan selama 2-4 minggu oleh pengrajin Toraja yang menguasai teknik tenun warisan leluhur.',
    details: ['Bahan: Sutera & Benang Emas Toraja', 'Motif: Pa\'Tedong & Pa\'Barre Allo', 'Potongan: Midi Skirt, A-Line', 'Kancing: Kulit Kerbau Alami', 'Origin: Tana Toraja, Sulawesi Selatan'],
    sold: 780, tags: ['tenun','rok','wanita','toraja']
  },
  {
    id: 8, name: 'Kaos Lurik Yogyakarta Classic', brand: 'LurikJogja',
    price: 125000, oldPrice: null, rating: 4.3, reviews: 78,
    badge: null, category: 'pria', subcat: 'Kaos',
    isNew: false, isSale: false, isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&q=80'
    ],
    colors: ['#c0392b','#2c3e50','#27ae60'],
    sizes: ['S','M','L','XL','XXL','3XL'],
    stock: 120,
    description: 'Kaos berbahan lurik khas Yogyakarta dengan sentuhan modern. Tekstur lurik yang khas memberikan kesan etnik namun tetap stylish untuk keseharian.',
    details: ['Bahan: Lurik Cotton Blend', 'Motif: Lurik Lasem Garis Halus', 'Potongan: Regular Fit', 'Perawatan: Cuci mesin, jangan diperas', 'Origin: Klaten, Jawa Tengah'],
    sold: 430, tags: ['kaos','lurik','pria','jogja']
  },
  {
    id: 9, name: 'Selendang Batik Pekalongan Sutera', brand: 'Pekalongan Silk',
    price: 350000, oldPrice: 480000, rating: 4.9, reviews: 167,
    badge: 'SALE', category: 'aksesori', subcat: 'Selendang',
    isNew: false, isSale: true, isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=700&q=80'
    ],
    colors: ['#c0392b','#2980b9','#8e44ad'],
    sizes: ['ONE SIZE'],
    stock: 22,
    description: 'Selendang batik sutera asli Pekalongan dengan motif mega mendung yang ikonik. Dibuat menggunakan teknik batik tulis dengan pewarna alami yang ramah lingkungan.',
    details: ['Bahan: Sutera Alam 100%', 'Teknik: Batik Tulis Canting', 'Motif: Mega Mendung Pekalongan', 'Dimensi: 200 x 55 cm', 'Origin: Pekalongan, Jawa Tengah'],
    sold: 560, tags: ['selendang','batik','aksesori','sutera']
  },
  {
    id: 10, name: 'Celana Batik Pria Formal', brand: 'BatikNusa Studio',
    price: 195000, oldPrice: null, rating: 4.6, reviews: 94,
    badge: 'NEW', category: 'pria', subcat: 'Celana',
    isNew: true, isSale: false, isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=80'
    ],
    colors: ['#2c3e50','#8B4513','#1a3a5c'],
    sizes: ['28','30','32','34','36','38'],
    stock: 55,
    description: 'Celana formal pria berbahan batik cap premium dengan motif truntum yang elegan. Cocok untuk acara resmi, pernikahan, atau kegiatan adat.',
    details: ['Bahan: Katun Twill Premium', 'Motif: Truntum Klasik', 'Potongan: Slim Fit Formal', 'Penutup: Zipper YKK Durable', 'Origin: Surakarta, Jawa Tengah'],
    sold: 320, tags: ['celana','batik','pria','formal']
  },
  {
    id: 11, name: 'Sepatu Wedges Tenun Ikat', brand: 'NusaShoes',
    price: 285000, oldPrice: 380000, rating: 4.7, reviews: 112,
    badge: 'SALE', category: 'sepatu', subcat: 'Wedges',
    isNew: false, isSale: true, isFeatured: false,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&q=80'
    ],
    colors: ['#c0392b','#2c3e50','#C4A265'],
    sizes: ['36','37','38','39','40','41'],
    stock: 18,
    description: 'Sepatu wedges elegan dengan bahan tenun ikat NTT yang eksotis. Dipadukan dengan sol wedges 6 cm yang nyaman dan stabil untuk penggunaan seharian.',
    details: ['Upper: Tenun Ikat Sumba', 'Inner: Kulit Domba', 'Sol: TPR Anti Slip', 'Tinggi Wedge: 6 cm', 'Origin: Waingapu, Sumba'],
    sold: 445, tags: ['sepatu','wedges','tenun','ntt']
  },
  {
    id: 12, name: 'Jaket Lurik Modern Streetwear', brand: 'LurikUrban',
    price: 450000, oldPrice: null, rating: 4.8, reviews: 43,
    badge: 'NEW', category: 'pria', subcat: 'Jaket',
    isNew: true, isSale: false, isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=80'
    ],
    colors: ['#2c3e50','#c0392b','#1a3a5c'],
    sizes: ['S','M','L','XL','XXL'],
    stock: 30,
    description: 'Jaket streetwear modern berbahan lurik Jawa yang dipadukan dengan desain kontemporer. Kolaborasi antara pengrajin tradisional Klaten dengan desainer muda Jakarta.',
    details: ['Outer: Lurik Premium Double Thread', 'Inner: Fleece Polyester Hangat', 'Zipper: YKK Double Pull', 'Saku: 4 pocket (2 luar, 2 dalam)', 'Origin: Klaten – Jakarta Collab'],
    sold: 178, tags: ['jaket','lurik','pria','streetwear']
  }
];

const CATEGORIES = [
  { id: 'semua', label: 'Semua', icon: 'fas fa-th', count: PRODUCTS.length },
  { id: 'wanita', label: 'Wanita', icon: 'fas fa-female', count: PRODUCTS.filter(p => p.category === 'wanita').length },
  { id: 'pria', label: 'Pria', icon: 'fas fa-male', count: PRODUCTS.filter(p => p.category === 'pria').length },
  { id: 'anak', label: 'Anak', icon: 'fas fa-child', count: PRODUCTS.filter(p => p.category === 'anak').length },
  { id: 'aksesori', label: 'Aksesori', icon: 'fas fa-gem', count: PRODUCTS.filter(p => p.category === 'aksesori').length },
  { id: 'sepatu', label: 'Sepatu', icon: 'fas fa-shoe-prints', count: PRODUCTS.filter(p => p.category === 'sepatu').length }
];

// Format helpers
function formatPrice(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}
function getStars(r) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<i class="fas fa-star${i <= Math.floor(r) ? ' filled' : (i - r < 1 ? '-half-alt' : '')}" style="font-size:.75rem;color:${i <= r ? '#f5a623' : '#ddd'}"></i>`;
  }
  return html;
}

function renderProducts(containerId, products) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = products.map(p => `
    <div class="prod-card" data-id="${p.id}">
      <div class="prod-card-img">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="prod-card-badge${p.badge==='NEW'?' green':p.badge==='HOT'?' blue':''}">${p.badge}</span>` : ''}
        <button class="prod-wish" onclick="toggleWish(${p.id},this)" title="Wishlist">
          <i class="far fa-heart"></i>
        </button>
        <button class="prod-quick" onclick="addToCartById(${p.id})">
          <i class="fas fa-shopping-bag"></i> Tambah ke Keranjang
        </button>
      </div>
      <div class="prod-info">
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-name"><a href="product.html?id=${p.id}">${p.name}</a></div>
        <div class="prod-stars">
          ${getStars(p.rating)}
          <span>(${p.reviews})</span>
        </div>
        <div class="prod-price-row">
          <div>
            ${p.oldPrice ? `<span class="prod-price-old">${formatPrice(p.oldPrice)}</span>` : ''}
            <span class="prod-price">${formatPrice(p.price)}</span>
          </div>
          <button class="btn-add-cart" onclick="addToCartById(${p.id})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}
