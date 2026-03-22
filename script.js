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

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
