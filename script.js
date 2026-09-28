const heartsBg = document.getElementById('heartsBg');
const heartEmojis = ['❤️', '💖', '💕', '💗', '🌸'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 12 + 18 + 'px';
    
    heartsBg.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 300);

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const giftBox = document.getElementById('giftBox');
const slider = document.getElementById('loveSlider');
const sliderValue = document.getElementById('sliderValue');
const feedbackText = document.getElementById('feedbackText');
const btnBukaKado = document.getElementById('btnBukaKado');
const btnRestart = document.getElementById('btnRestart');
const messagesList = document.getElementById('messagesList');

const allMessages = [
    "1. Makasih yaa udah selalu ada buat aku dan bikin hari-hariku lebih indah 💕",
    "2. Kamu itu alasan utama aku sering senyum-senyum sendiri tiap hari 🥰",
    "3. Gemes banget sih kamu, jangan galak-galak yaa sayang 😜",
    "4. Setiap momen sama kamu selalu jadi hal favorit buat aku ✨",
    "5. Semoga kita bisa terus bareng-bareng dan makin sayang satu sama lain 🌹",
    "6. Makasih udah sabar meladeni sifat aku yang kadang ajaib ini 🥺",
    "7. Kamu adalah kado paling indah yang pernah hadir di hidup aku 🎁❤️",
    "8. Jangan lupa jaga kesehatan yaa sayang, aku selalu dukung kamu!",
    "9. Aku sayang banget sama kamu, melebihi apa yang bisa diucapkan kata-kata 😘",
    "10. Tetap jadi diri kamu yang lucu, gemes, dan menyenangkan yaa 💕",
    "11. Apapun yang terjadi, aku bakal tetap pilih kamu lagi dan lagi 💖",
    "12. Jangan lupa makan yaa manis, nanti kangennya berkurang kalau sakit 😜"
];

giftBox.addEventListener('click', () => {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
});

slider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    sliderValue.textContent = val + '%';

    if (val < 40) {
        feedbackText.textContent = "yahh ga sayang aku nih?";
        btnBukaKado.classList.add('hidden');
    } else if (val >= 40 && val < 70) {
        feedbackText.textContent = "koo kayaa ga niat gitu sayangnya sih";
        btnBukaKado.classList.add('hidden');
    } else if (val >= 70 && val < 100) {
        feedbackText.textContent = "ihhh tanggung banget, males ah";
        btnBukaKado.classList.add('hidden');
    } else if (val === 100) {
        feedbackText.textContent = "Yey kamuu beneran sayangg banget sama aku 🥰💖";
        btnBukaKado.classList.remove('hidden');
    }
});

btnBukaKado.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');

    const shuffled = [...allMessages].sort(() => 0.5 - Math.random()).slice(0, 10);

    messagesList.innerHTML = '';
    shuffled.forEach(msg => {
        const item = document.createElement('div');
        item.classList.add('message-item');
        item.textContent = msg;
        messagesList.appendChild(item);
    });
});

btnRestart.addEventListener('click', () => {
    slider.value = 50;
    sliderValue.textContent = '50%';
    feedbackText.textContent = "koo kayaa ga niat gitu sayangnya sih";
    btnBukaKado.classList.add('hidden');

    step3.classList.add('hidden');
    step1.classList.remove('hidden');
});

