/* ============================================================================
   ELISABETTA & MATTEO - MINIMAL WEDDING WEBSITE
   JavaScript Functions
   ============================================================================ */

// ============================================================================
// MENU TOGGLE
// ============================================================================

const menuToggle = document.getElementById('menuToggle');
const sidebarMenu = document.getElementById('sidebarMenu');
const menuOverlay = document.getElementById('menuOverlay');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    sidebarMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

function closeMenu() {
    menuToggle.classList.remove('active');
    sidebarMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
}

menuOverlay.addEventListener('click', closeMenu);

// ============================================================================
// SLIDER FOTO
// ============================================================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${n * 100}%)`;
}

function changeSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    showSlide(currentSlide);
}

// ============================================================================
// COUNTDOWN TIMER
// ============================================================================

function updateCountdown() {
    const weddingDate = new Date('2026-09-26T14:30:00').getTime();
    
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', updateCountdown);

// ============================================================================
// SMOOTH SCROLL
// ============================================================================

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
