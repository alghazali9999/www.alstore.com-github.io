// Data Produk
const products = [
    {
        id: 1,
        name: "PC All-in-One Lenovo",
        category: "All-in-One",
        price: 5000000,
        rating: 4.5,
        discount: 10,
        image: "https://i.pinimg.com/564x/f0/6e/33/f06e3383eb7e82d482f63cfd0c1a6ca6.jpg"
    },
    {
        id: 2,
        name: "PC Gaming Asus ROG",
        category: "Gaming",
        price: 7500000,
        rating: 4.8,
        discount: 15,
        image: "https://i.pinimg.com/564x/9b/f4/de/9bf4de40c7487130b7477d8b544b2862.jpg"
    },
    {
        id: 3,
        name: "PC Desktop Acer Aspire",
        category: "Desktop",
        price: 6000000,
        rating: 4.3,
        discount: 5,
        image: "https://i.pinimg.com/564x/8f/e7/a3/8fe7a3b69a3ea63bcd1a625fe1025033.jpg"
    },
    {
        id: 4,
        name: "PC Gaming MSI",
        category: "Gaming",
        price: 9500000,
        rating: 4.6,
        discount: 20,
        image: "https://i.pinimg.com/564x/8b/b6/bd/8bb6bd69852d8f76595e9b55b3b7f80e.jpg"
    },
    {
        id: 5,
        name: "Laptop Dell Inspiron 15",
        category: "Desktop",
        price: 7000000,
        rating: 4.4,
        discount: 25,
        image: "https://i.pinimg.com/564x/84/4a/2c/844a2c8d9b527e88ceff90f1371e8257.jpg"
    },
    {
        id: 6,
        name: "PC All-in-One HP",
        category: "All-in-One",
        price: 4500000,
        rating: 4.2,
        discount: 10,
        image: "https://i.pinimg.com/564x/f8/d9/18/f8d9181c6f3c93da660787a92880266c.jpg"
    },
    {
        id: 7,
        name: "Laptop ASUS ROG",
        category: "Gaming",
        price: 18000000,
        rating: 4.9,
        discount: 30,
        image: "https://i.pinimg.com/736x/c8/f1/60/c8f160a6836e9e39a6323c6c998ce4f8.jpg"
    },
    {
        id: 8,
        name: "PC Gaming Razer",
        category: "Gaming",
        price: 12500000,
        rating: 4.7,
        discount: 15,
        image: "https://i.pinimg.com/564x/1d/5d/da/1d5ddac0f3e05fdce88cd7329be59cba.jpg"
    },
    {
        id: 9,
        name: "Desktop HP Pavilion",
        category: "Desktop",
        price: 5000000,
        rating: 4.0,
        discount: 5,
        image: "https://i.pinimg.com/736x/12/88/9e/12889ee3a4a2eddb65c67fa98ac913fd.jpg"
    },
    {
        id: 10,
        name: "All-in-One Acer",
        category: "All-in-One",
        price: 5600000,
        rating: 4.1,
        discount: 10,
        image: "https://i.pinimg.com/564x/b2/84/65/b284658d8e2a084986343f358c147d89.jpg"
    },
    {
        id: 11,
        name: "Laptop HP Envy 13",
        category: "Laptop",
        price: 12000000,
        rating: 4.7,
        discount: 25,
        image: "https://i.pinimg.com/736x/03/6b/9a/036b9aab1f495cd94276ce40351855fa.jpg"
    },
    {
        id: 12,
        name: "MacBook Pro M1",
        category: "Laptop",
        price: 23000000,
        rating: 4.9,
        discount: 20,
        image: "https://i.pinimg.com/564x/e9/f3/4b/e9f34ba9918e2412e91948e6c1cb092c.jpg"
    },
    {
        id: 13,
        name: "Lenovo ThinkPad X1",
        category: "Laptop",
        price: 15000000,
        rating: 4.8,
        discount: 30,
        image: "https://i.pinimg.com/736x/eb/21/a5/eb21a50c4703c3b6192a8c4cfd77f8b2.jpg"
    },
    {
        id: 14,
        name: "iMac 24-inch",
        category: "All-in-One",
        price: 27000000,
        rating: 4.8,
        discount: 5,
        image: "https://i.pinimg.com/564x/71/26/e0/7126e0831f0009b00caf951afaf8f762.jpg"
    },
    {
        id: 15,
        name: "Dell XPS 13",
        category: "Laptop",
        price: 18000000,
        rating: 4.7,
        discount: 10,
        image: "https://i.pinimg.com/564x/25/f7/56/25f756cc089b5b84114c1fa490f7757f.jpg"
    },
    {
        id: 16,
        name: "MSI Prestige 14",
        category: "Laptop",
        price: 14000000,
        rating: 4.5,
        discount: 20,
        image: "https://i.pinimg.com/564x/77/0b/f2/770bf254ee508367ecc7663071d37ec2.jpg"
    },
    {
        id: 17,
        name: "ASUS VivoBook S14",
        category: "Laptop",
        price: 9000000,
        rating: 4.4,
        discount: 15,
        image: "https://i.pinimg.com/564x/72/44/3b/72443b68d41f4a3d8ea3b4c5abda2f8d.jpg"
    },
    {
        id: 18,
        name: "Acer Swift 3",
        category: "Laptop",
        price: 8000000,
        rating: 4.3,
        discount: 5,
        image: "https://i.pinimg.com/564x/61/a6/97/61a697ba220a485a4f2d801a1c42b38b.jpg"
    },
    {
        id: 19,
        name: "HP Omen 15",
        category: "Gaming",
        price: 20000000,
        rating: 4.9,
        discount: 25,
        image: "https://i.pinimg.com/564x/50/c9/1c/50c91c4131b0739ad84f67e9ca403ac4.jpg"
    },
    {
        id: 20,
        name: "Alienware Aurora R12",
        category: "Gaming",
        price: 25000000,
        rating: 4.8,
        discount: 10,
        image: "https://i.pinimg.com/736x/b5/e2/68/b5e268ea118564a79c9b36074f1775d9.jpg"
    },
    {
        id: 21,
        name: "Laptop Lenovo Yoga 7i",
        category: "Laptop",
        price: 13000000,
        rating: 4.6,
        discount: 15,
        image: "https://i.pinimg.com/564x/30/50/5a/30505ae49a61afd19074802250a54f6c.jpg"
    }
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>

            <img
              src="${product.image}"
              alt="${product.name}"
              class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 rounded-t-lg"
            />

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

// Fungsi untuk memfilter produk berdasarkan harga, kategori, dan diskon
function filterProducts() {
    const maxPrice = document.getElementById('harga-range').value;
    const selectedCategories = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
    const minDiscount = document.getElementById('diskon-range').value;

    // Filter produk berdasarkan harga, kategori, dan diskon
    const filtered = products.filter(product => {
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchPrice = product.price <= maxPrice;
        const matchDiscount = product.discount >= minDiscount;
        return matchCategory && matchPrice && matchDiscount;
    });

    renderProducts(filtered);
}

// Fungsi untuk mengurutkan produk
function sortProducts(criteria) {
    let sortedProducts;

    switch (criteria) {
        case 'highest':
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
            break;
        case 'lowest':
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
            break;
        case 'newest':
            sortedProducts = [...products].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
        case 'bestselling':
            sortedProducts = [...products].sort((a, b) => b.sold - a.sold);
            break;
        default:
            sortedProducts = products; // Jika tidak ada kriteria, gunakan produk asli
    }

    renderProducts(sortedProducts); // Render produk setelah diurutkan
}

// Render produk awal
renderProducts(products);

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

document.getElementById('search-input').addEventListener('input', searchProducts);

// Render produk awal
renderProducts(products);


// Update tampilan harga di bawah input range
document.getElementById('harga-range').addEventListener('input', function () {
    const hargaValue = document.getElementById('harga-range').value;
    document.getElementById('harga-value').innerText = `Maksimal Harga: Rp ${parseInt(hargaValue).toLocaleString()}`;
    filterProducts();
});

// Update tampilan diskon di bawah input range
document.getElementById('diskon-range').addEventListener('input', function () {
    const diskonValue = document.getElementById('diskon-range').value;
    document.getElementById('diskon-value').innerText = `Diskon minimal: ${diskonValue}%`;
    filterProducts();
});

// Checkbox listener untuk memfilter produk berdasarkan kategori
const checkboxes = document.querySelectorAll('.filter-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

// Render semua produk saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

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
