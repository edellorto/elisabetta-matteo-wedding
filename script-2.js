// ===== MENU TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const toggleSpans = menuToggle.querySelectorAll('span');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sidebarMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Reset animations when toggling
    toggleSpans.forEach(span => {
        span.style.animation = 'none';
        setTimeout(() => {
            if (menuToggle.classList.contains('active')) {
                const index = Array.from(toggleSpans).indexOf(span);
                if (index === 0) {
                    span.style.animation = 'chicco-to-x-1 0.6s ease forwards';
                } else if (index === 1) {
                    span.style.animation = 'chicco-to-x-2 0.6s ease forwards 0.1s';
                } else if (index === 2) {
                    span.style.animation = 'chicco-to-x-3 0.6s ease forwards 0.2s';
                }
            } else {
                span.style.animation = 'none';
            }
        }, 10);
    });
});

// Close menu when clicking on overlay
overlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    sidebarMenu.classList.remove('active');
    overlay.classList.remove('active');
    
    // Reset animations
    toggleSpans.forEach(span => {
        span.style.animation = 'none';
    });
});

// Close menu when clicking on a link
const menuLinks = sidebarMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        sidebarMenu.classList.remove('active');
        overlay.classList.remove('active');
        
        // Reset animations
        toggleSpans.forEach(span => {
            span.style.animation = 'none';
        });
    });
});

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const weddingDate = new Date('2026-09-26T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
