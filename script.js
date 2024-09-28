const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let scrollAmount = 0;
let slideWidth = window.innerWidth; // Assuming slides take full window width

// Move carousel next slide
function moveNext() {
    scrollAmount += slideWidth;
    if (scrollAmount >= carousel.scrollWidth) {
        scrollAmount = 0;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Move carousel to previous slide
function movePrev() {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) {
        scrollAmount = carousel.scrollWidth - slideWidth;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

// Automatic sliding every 5 seconds
setInterval(moveNext, 5000); // Move to the next slide every 5 seconds

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    const visibleItemsCount = Math.floor(carouselInner.offsetWidth / itemWidth); // Hitung berapa banyak item yang terlihat
    const totalItems = items.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Fungsi untuk memperbarui tampilan carousel
    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    // Fungsi untuk menampilkan slide selanjutnya
    function nextSlide() {
        if (currentIndex < totalItems - visibleItemsCount) {
            currentIndex++;
        } else {
            currentIndex = 0; // kembali ke awal jika sudah mencapai akhir
        }
        updateCarousel();
    }

    // Fungsi untuk menampilkan slide sebelumnya
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - visibleItemsCount; // kembali ke slide terakhir yang penuh
        }
        updateCarousel();
    }

    // Event listener untuk tombol "Next"
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide(); // reset timer setelah klik
    });

    // Event listener untuk tombol "Previous"
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide(); // reset timer setelah klik
    });

    // Fungsi untuk memulai auto-slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // bergerak setiap 5 detik
    }

    // Fungsi untuk reset auto-slide saat tombol diklik
    function resetAutoSlide() {
        clearInterval(autoSlideInterval); // hentikan auto-slide yang ada
        startAutoSlide(); // mulai auto-slide lagi
    }

    // Mulai auto-slide saat halaman dimuat
    startAutoSlide();
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
