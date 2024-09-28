
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
        name: 'Mouse Logitech MX Master 3',
        image: 'https://i.pinimg.com/564x/55/15/76/551576334ee0322175fb704952442545.jpg',
        price: 1500000,
        rating: 4.8,
        discount: 10,
    },
    {
        id: '2',
        name: 'Mouse Razer DeathAdder V2',
        image: 'https://i.pinimg.com/736x/22/48/8c/22488cc91d7fe41081c6e625140f05c6.jpg',
        price: 1000000,
        rating: 4.7,
        discount: 15,
    },
    {
        id: '3',
        name: 'Mouse SteelSeries Rival 600',
        image: 'https://i.pinimg.com/564x/a9/9a/23/a99a230b827f10f24dcfc8392f135c6f.jpg',
        price: 1200000,
        rating: 4.9,
        discount: 5,
    },
    {
        id: '4',
        name: 'Mouse Corsair Dark Core RGB',
        image: 'https://i.pinimg.com/564x/71/0b/f0/710bf03c87125e9be7b46a57ec1fa3d0.jpg',
        price: 1700000,
        rating: 4.6,
        discount: 20,
    },
    {
        id: '5',
        name: 'Mouse Asus ROG Gladius II',
        image: 'https://i.pinimg.com/564x/e1/41/5a/e1415abd20f012b8b93bded21f9e7acf.jpg',
        price: 1100000,
        rating: 4.5,
        discount: 10,
    },
    {
        id: '6',
        name: 'Mouse HP Omen Reactor',
        image: 'https://i.pinimg.com/564x/e5/6a/45/e56a45dc90f3e34b659c930e52e64b77.jpg',
        price: 1300000,
        rating: 4.7,
        discount: 15,
    },
    {
        id: '7',
        name: 'Mouse Microsoft Arc Mouse',
        image: 'https://i.pinimg.com/564x/0a/0a/a8/0a0aa8152b51bbad8b9e3683e63e2365.jpg',
        price: 900000,
        rating: 4.4,
        discount: 5,
    },
    {
        id: '8',
        name: 'Mouse Lenovo Legion M500',
        image: 'https://i.pinimg.com/564x/9b/80/0a/9b800a86820175c1ddb55cbc4b95fc77.jpg',
        price: 700000,
        rating: 4.3,
        discount: 10,
    },
    {
        id: '9',
        name: 'Mouse Logitech G502 Hero',
        image: 'https://i.pinimg.com/564x/82/9d/a8/829da8aa3b947da3ca93eaa5e04b0e1f.jpg',
        price: 1500000,
        rating: 4.8,
        discount: 12,
    },
    {
        id: '10',
        name: 'Mouse Dell Alienware AW610M',
        image: 'https://i.pinimg.com/564x/80/4f/9d/804f9d0b0e3e9853a617c02332169c30.jpg',
        price: 1800000,
        rating: 4.7,
        discount: 8,
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
