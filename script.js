const pages = document.querySelectorAll(".page");

const music = document.getElementById("music");
const photoElement = document.getElementById("photo");

const photos = [
    "bian1.jpeg",
    "bian2.jpeg",
    "bian3.jpeg",
    "bian4.jpeg",
    "bian5.jpeg",
    "bian6.jpeg",
    "bian7.jpeg",
    "bian8.jpeg"
];

let currentPhoto = 0;


// ============================
// PINDAH HALAMAN
// ============================

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}


// ============================
// OPEN SURPRISE
// ============================

function openSurprise() {

    music.play().catch(error => {
        console.log("Music tidak bisa dimainkan:", error);
    });

    showPage("cake");
}


// ============================
// BLOW CANDLE
// ============================

function blowCandle() {

    showPage("message");

    createHearts(15);
}


// ============================
// SLIDESHOW
// ============================

function showSlideshow() {

    showPage("slideshow");

    currentPhoto = 0;

    showPhoto();
}


// Menampilkan foto
function showPhoto() {

    if (photos.length === 0) {
        return;
    }

    photoElement.style.opacity = 0;

    setTimeout(() => {

        photoElement.src = photos[currentPhoto];

        photoElement.style.opacity = 1;

    }, 300);
}


// Foto berikutnya
function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();
}


// ============================
// FLOATING HEARTS
// ============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = ["💗", "💕", "💖", "💓", "💞"];

    heart.innerHTML =
        heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}


// Buat banyak hearts
function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 150);

    }
}


// Hearts berjalan terus
setInterval(createHeart, 700);
