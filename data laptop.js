
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
        name: 'Laptop Dell XPS 13',
        image: 'https://i.pinimg.com/564x/f5/95/1b/f5951b5564d563e51f53a5cdec268815.jpg',
        price: 15000000,
        rating: 4.5,
        discount: 10,
    },
    {
        id: '2',
        name: 'Laptop HP Spectre x360',
        image: 'https://i.pinimg.com/564x/1a/c6/81/1ac681ab418ea8dfd00e37c3b2580fe1.jpg',
        price: 20000000,
        rating: 4.0,
        discount: 15,
    },
    {
        id: '3',
        name: 'Laptop Apple MacBook Air M1',
        image: 'https://i.pinimg.com/564x/70/82/96/7082967765259ed64a69c039c87228ba.jpg',
        price: 25000000,
        rating: 4.8,
        discount: 5,
    },
    {
        id: '4',
        name: 'Laptop Lenovo ThinkPad X1 Carbon',
        image: 'https://i.pinimg.com/736x/00/19/b8/0019b84191ac8c2f57c827e4969b2858.jpg',
        price: 22000000,
        rating: 4.7,
        discount: 20,
    },
    {
        id: '5',
        name: 'Laptop Asus ZenBook 14',
        image: 'https://i.pinimg.com/564x/c7/45/5f/c7455f85599ba663f18d1e147c661f9d.jpg',
        price: 17000000,
        rating: 4.3,
        discount: 10,
    },
    {
        id: '6',
        name: 'Laptop Acer Swift 3',
        image: 'https://i.pinimg.com/564x/b8/43/81/b84381df5947b804b2e9c42def37c298.jpg',
        price: 13000000,
        rating: 4.6,
        discount: 15,
    },
    {
        id: '7',
        name: 'Laptop Razer Blade 15',
        image: 'https://i.pinimg.com/564x/e4/1f/3c/e41f3c01e85ebc7e5a588c52bd558900.jpg',
        price: 30000000,
        rating: 4.2,
        discount: 5,
    },
    {
        id: '8',
        name: 'Laptop Microsoft Surface',
        image: 'https://i.pinimg.com/564x/d1/ae/bd/d1aebdcbaa85ff8182f986d505b6bf2a.jpg',
        price: 25000000,
        rating: 4.4,
        discount: 10,
    },
    {
        id: '9',
        name: 'Laptop MSI GF63 Thin',
        image: 'https://i.pinimg.com/564x/df/46/bc/df46bc3cdc18320d44cb9b8fdd772650.jpg',
        price: 16000000,
        rating: 4.5,
        discount: 12,
    },
    {
        id: '10',
        name: 'Laptop HP Pavilion 15',
        image: 'https://i.pinimg.com/736x/e8/5e/a5/e85ea5cc4fc288237a52524d8af8da6a.jpg',
        price: 14000000,
        rating: 4.1,
        discount: 8,
    },
    {
        id: '11',
        name: 'Laptop Gigabyte Aero 15',
        image: 'https://i.pinimg.com/736x/37/70/9c/37709c7fe2660faacd87b1cb7e482985.jpg',
        price: 27000000,
        rating: 4.3,
        discount: 5,
    },
    {
        id: '12',
        name: 'Laptop Dell Inspiron 15',
        image: 'https://i.pinimg.com/564x/84/4a/2c/844a2c8d9b527e88ceff90f1371e8257.jpg',
        price: 11000000,
        rating: 4.0,
        discount: 10,
    },
    {
        id: '13',
        name: 'Laptop Samsung Galaxy Book Pro',
        image: 'https://i.pinimg.com/736x/96/e6/1c/96e61ca53e3da39dfd73cf36cf9224c8.jpg',
        price: 23000000,
        rating: 4.2,
        discount: 15,
    },
    {
        id: '14',
        name: 'Laptop Lenovo IdeaPad 5',
        image: 'https://i.pinimg.com/736x/4c/7b/16/4c7b16f3b07e4dffa9228b007fe0bece.jpg',
        price: 12000000,
        rating: 4.5,
        discount: 20,
    },
    {
        id: '15',
        name: 'Laptop HP Envy x360',
        image: 'https://i.pinimg.com/564x/52/ce/1f/52ce1f7e3877273525cdaa7eb92b435d.jpg',
        price: 19000000,
        rating: 4.8,
        discount: 5,
    },
    {
        id: '16',
        name: 'Laptop Asus ROG Zephyrus G14',
        image: 'https://i.pinimg.com/736x/c8/f1/60/c8f160a6836e9e39a6323c6c998ce4f8.jpg',
        price: 30000000,
        rating: 4.4,
        discount: 10,
    },
    {
        id: '17',
        name: 'Laptop Acer Predator Helios 300',
        image: 'https://i.pinimg.com/564x/a2/20/b6/a220b62b2cf9c2b94b9fa214a4a29da4.jpg',
        price: 22000000,
        rating: 4.3,
        discount: 15,
    },
    {
        id: '18',
        name: 'Laptop MSI Prestige 14',
        image: 'https://i.pinimg.com/564x/77/0b/f2/770bf254ee508367ecc7663071d37ec2.jpg',
        price: 25000000,
        rating: 4.6,
        discount: 10,
    },
    {
        id: '19',
        name: 'Laptop Dell G5 15',
        image: 'https://i.pinimg.com/564x/66/6f/87/666f8704bcafa733f27c23107e55556a.jpg',
        price: 18000000,
        rating: 4.7,
        discount: 20,
    },
    {
        id: '20',
        name: 'Laptop Lenovo Legion 5',
        image: 'https://i.pinimg.com/564x/21/d2/b0/21d2b0f5d390ab9a47bee735b1eebb10.jpg',
        price: 25000000,
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
