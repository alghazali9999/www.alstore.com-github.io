
const categoryButton = document.getElementById('category-button');
const megaMenu = document.getElementById('mega-menu');

categoryButton.addEventListener('click', () => {
    // Toggle display mega menu
    if (megaMenu.classList.contains('show')) {
        megaMenu.classList.remove('show');
        setTimeout(() => {
            megaMenu.style.display = 'none'; // Menyembunyikan setelah transisi selesai
        }, 500); // Waktu yang sama dengan durasi transisi
    } else {
        megaMenu.style.display = 'block'; // Menampilkan menu
        setTimeout(() => {
            megaMenu.classList.add('show'); // Menambahkan kelas show untuk opacity
        }, 10); // Delay sedikit untuk efek transisi
    }
});

// Menyembunyikan mega menu saat klik di luar
window.addEventListener('click', (event) => {
    if (!event.target.closest('.relative')) {
        megaMenu.classList.remove('show');
        setTimeout(() => {
            megaMenu.style.display = 'none';
        }, 500);
    }
});

// Data produk
const products = [
    {
        id: '1',
        name: 'Keyboard Logitech G Pro X',
        image: 'https://i.pinimg.com/564x/44/eb/1c/44eb1c2f2520814f2839769c326ca60c.jpg',
        price: 1500000,
        rating: 4.8,
        discount: 10,
    },
    {
        id: '2',
        name: 'Keyboard Razer Huntsman Mini',
        image: 'https://i.pinimg.com/736x/11/6c/95/116c959000cc55d9b6ea2f9109399689.jpg',
        price: 1700000,
        rating: 4.7,
        discount: 15,
    },
    {
        id: '3',
        name: 'Keyboard SteelSeries Apex Pro',
        image: 'https://i.pinimg.com/736x/26/55/28/26552848ed77c089b9845f2ffff8ae21.jpg',
        price: 3000000,
        rating: 4.9,
        discount: 5,
    },
    {
        id: '4',
        name: 'Keyboard Corsair K70 RGB MK.2',
        image: 'https://i.pinimg.com/564x/06/18/87/061887c8edf698016947d763708206c4.jpg',
        price: 2000000,
        rating: 4.7,
        discount: 20,
    },
    {
        id: '5',
        name: 'Keyboard HyperX Alloy Origins',
        image: 'https://i.pinimg.com/564x/70/48/2b/70482b21403dba8b052c57f8558867e5.jpg',
        price: 1800000,
        rating: 4.5,
        discount: 10,
    },
    {
        id: '6',
        name: 'Keyboard Keychron K6',
        image: 'https://i.pinimg.com/564x/83/62/ca/8362ca4b77b182fe0d87e3e7f41532f9.jpg',
        price: 1400000,
        rating: 4.6,
        discount: 15,
    },
    {
        id: '7',
        name: 'Keyboard Glorious GMMK TKL',
        image: 'https://i.pinimg.com/736x/96/38/0b/96380b387ed1d7f3447cda511654302e.jpg',
        price: 1600000,
        rating: 4.4,
        discount: 5,
    },
    {
        id: '8',
        name: 'Keyboard Anne Pro 2',
        image: 'https://i.pinimg.com/564x/fc/c5/92/fcc592f35469ea484451637c41648574.jpg',
        price: 1500000,
        rating: 4.5,
        discount: 10,
    },
    {
        id: '9',
        name: 'Keyboard Ducky One 2 Mini',
        image: 'https://i.pinimg.com/564x/ee/ea/e3/eeeae322941a21209b51bbaaad660e08.jpg',
        price: 1700000,
        rating: 4.8,
        discount: 12,
    },
    {
        id: '10',
        name: 'Keyboard Varmilo VA87M',
        image: 'https://i.pinimg.com/564x/e7/f8/2f/e7f82f7d2cfd97329a7ae021c77339f3.jpg',
        price: 2200000,
        rating: 4.7,
        discount: 8,
    },
    {
        id: '11',
        name: 'Keyboard Akko 3068B',
        image: 'https://i.pinimg.com/564x/9b/fb/1f/9bfb1fe1a2afe7704543efc27b40e770.jpg',
        price: 1600000,
        rating: 4.6,
        discount: 5,
    },
    {
        id: '12',
        name: 'Keyboard Royal Kludge RK61',
        image: 'https://i.pinimg.com/564x/bd/aa/94/bdaa94d0dc7429dc7ca7ef03b97a39e9.jpg',
        price: 1300000,
        rating: 4.4,
        discount: 10,
    },
    {
        id: '13',
        name: 'Keyboard Keychron K2',
        image: 'https://i.pinimg.com/736x/e3/bb/2d/e3bb2d54c2e2cf884934fe6c3ee3c9b7.jpg',
        price: 1800000,
        rating: 4.7,
        discount: 15,
    },
    {
        id: '14',
        name: 'Keyboard Leopold FC750R',
        image: 'https://i.pinimg.com/564x/fc/6a/ed/fc6aedc30ce5e752dffc0449fc8ce08b.jpg',
        price: 2000000,
        rating: 4.5,
        discount: 20,
    },
    {
        id: '15',
        name: 'Keyboard Hexgears Nova',
        image: 'https://i.pinimg.com/564x/60/23/38/6023382d84d4cdd9b460f1a3e7189f73.jpg',
        price: 1500000,
        rating: 4.8,
        discount: 5,
    },
    {
        id: '16',
        name: 'Keyboard Logitech G915 TKL',
        image: 'https://i.pinimg.com/564x/b5/92/6f/b5926f6fd5bbf3907d4ac7a41a8601b0.jpg',
        price: 2500000,
        rating: 4.6,
        discount: 10,
    },
    {
        id: '17',
        name: 'Keyboard Razer BlackWidow V3',
        image: 'https://i.pinimg.com/564x/fa/52/d8/fa52d892c48ceba89ac055c54bc1fcfa.jpg',
        price: 2300000,
        rating: 4.7,
        discount: 15,
    },
    {
        id: '18',
        name: 'Keyboard Corsair K100 RGB',
        image: 'https://i.pinimg.com/736x/45/56/36/4556367f83969115bfdd77a51e8ccc3e.jpg',
        price: 3200000,
        rating: 4.9,
        discount: 10,
    },
    {
        id: '19',
        name: 'Keyboard Durgod Taurus K320',
        image: 'https://i.pinimg.com/564x/b1/1c/cd/b11ccdc854dedc1561597513267e27be.jpg',
        price: 1800000,
        rating: 4.6,
        discount: 20,
    },
    {
        id: '20',
        name: 'Keyboard Epomaker GK68XS',
        image: 'https://i.pinimg.com/736x/ad/12/30/ad1230b0d5c0c43af2905dd7a79b5346.jpg',
        price: 2000000,
        rating: 4.5,
        discount: 12,
    },
];



// Array untuk menyimpan keranjang belanja
let cart = [];

// Fungsi untuk render produk ke dalam halaman
function renderProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Reset konten

    filteredProducts.forEach(product => {
        const productCard = `
          <a href="#" class="group relative block overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
            <button class="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
              <span class="sr-only">Wishlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>

            <img src="${product.image}" alt="${product.name}" class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 rounded-t-lg" />

            <div class="relative border border-gray-200 bg-white p-6 rounded-b-lg">
              <h3 class="mt-4 text-lg font-semibold text-gray-900">${product.name}</h3>
              <p class="mt-1.5 text-sm text-gray-700">Rp ${product.price.toLocaleString()}</p>
              <p class="text-yellow-500">Rating: ${product.rating}</p>
              <p class="text-green-500">Diskon: ${product.discount}%</p>

              <div class="flex items-center mt-4">
                <button class="bg-gray-200 text-gray-900 px-3 py-1 rounded-l" onclick="updateQuantity('${product.id}', -1)">-</button>
                <input type="text" id="quantity-${product.id}" class="w-12 text-center border border-gray-300 rounded" value="1" readonly />
                <button class="bg-gray-200 text-gray-900 px-3 py-1 rounded-r" onclick="updateQuantity('${product.id}', 1)">+</button>
              </div>

              <form class="mt-4" onsubmit="addToCart(event, '${product.id}', ${product.price})">
                <button type="submit" class="block w-full rounded bg-purple-400 p-4 text-sm font-medium text-white transition hover:bg-purple-500">
                  Beli Sekarang
                </button>
              </form>
            </div>
          </a>
        `;
        productList.innerHTML += productCard;
    });
}

// Fungsi untuk memperbarui kuantitas
function updateQuantity(productId, change) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let currentQuantity = parseInt(quantityInput.value);

    // Periksa apakah perubahan kuantitas valid
    if (currentQuantity + change > 0) {
        currentQuantity += change;
        quantityInput.value = currentQuantity; // Update nilai input kuantitas
    }
}

// Fungsi untuk menambahkan item ke keranjang
function addToCart(event, productId, price) {
    event.preventDefault(); // Mencegah reload halaman
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value);

    // Tambahkan item ke keranjang
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity; // Update kuantitas jika item sudah ada
    } else {
        cart.push({ id: productId, price: price, quantity: quantity }); // Tambah item baru
    }

    // Hitung total harga
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Tampilkan notifikasi
    alert(`Item added to cart! Total Price: Rp ${totalPrice.toLocaleString()}`);
}

// Fungsi pencarian produk
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    // Filter produk berdasarkan input pencarian
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    // Tampilkan produk yang difilter
    renderProducts(filteredProducts);
}

// Event listener untuk input pencarian
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', searchProducts);

// Tampilkan semua produk saat halaman dimuat
renderProducts(products);
