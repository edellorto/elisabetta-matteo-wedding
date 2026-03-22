// ===== MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    const isActive = menuToggle.classList.toggle('active');
    sidebarMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
});

overlay.addEventListener('click', closeMenu);

sidebarMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

function closeMenu() {
    menuToggle.classList.remove('active');
    sidebarMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const weddingDate = new Date('2026-09-26T14:30:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    document.getElementById('days').textContent    = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('hours').textContent   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').textContent = Math.floor((distance % (1000 * 60)) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== BOLLICINE DI SFONDO =====
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 18 + 6; // 6-24px
    bubble.style.width  = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left   = Math.random() * 100 + 'vw';
    const duration = Math.random() * 10 + 8; // 8-18s
    bubble.style.animationDuration = duration + 's';
    bubble.style.animationDelay    = Math.random() * 4 + 's';
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), (duration + 4) * 1000);
}

// Crea una bollicina ogni 1.2 secondi
setInterval(createBubble, 1200);
// Crea subito alcune bollicine sparse
for (let i = 0; i < 8; i++) setTimeout(createBubble, i * 400);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
