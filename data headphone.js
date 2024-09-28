
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
        name: 'Headphone Sony WF-1000XM4',
        image: 'https://i.pinimg.com/564x/e5/4e/df/e54edf3cf8e9d4a0bdd4ef8e1c427dcb.jpg',
        price: 4000000,
        rating: 4.7,
        discount: 10,
    },
    {
        id: '2',
        name: 'Headphone Apple AirPods Pro',
        image: 'https://i.pinimg.com/736x/6a/a0/db/6aa0db6bd95d043d0329695f7de06ea9.jpg',
        price: 3500000,
        rating: 4.8,
        discount: 5,
    },
    {
        id: '3',
        name: 'Headphone Samsung Galaxy Buds Pro',
        image: 'https://i.pinimg.com/564x/90/7e/f4/907ef4f52301063b3e03ad712a43481f.jpg',
        price: 2500000,
        rating: 4.6,
        discount: 12,
    },
    {
        id: '4',
        name: 'Headphone Jabra Elite 75t',
        image: 'https://i.pinimg.com/564x/d4/48/58/d44858575ec57a77285a5dd9ee543535.jpg',
        price: 3000000,
        rating: 4.5,
        discount: 20,
    },
    {
        id: '5',
        name: 'Headphone Sennheiser Momentum True Wireless 2',
        image: 'https://i.pinimg.com/564x/35/9e/15/359e157bce85fed21dd5ad5f6d7f6855.jpg',
        price: 4500000,
        rating: 4.7,
        discount: 15,
    },
    {
        id: '6',
        name: 'Headphone Bose QuietComfort Earbuds',
        image: 'https://i.pinimg.com/736x/11/e6/1e/11e61efb40ed44b8aaccebab2bf2a245.jpg',
        price: 5000000,
        rating: 4.8,
        discount: 10,
    },
    {
        id: '7',
        name: 'Headphone Beats Powerbeats Pro',
        image: 'https://i.pinimg.com/564x/8a/65/0e/8a650e27a96ae87b05528b3b8590cc54.jpg',
        price: 3500000,
        rating: 4.3,
        discount: 5,
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
