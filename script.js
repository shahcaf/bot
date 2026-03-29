// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll animations on scroll
const reveals = document.querySelectorAll('.reveal');

const revealElements = () => {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('visible');
        }
    });
};

// Also trigger on first load
window.addEventListener('load', revealElements);
window.addEventListener('scroll', revealElements);

// Navbar logic
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add dynamic delay to feature cards for "staggered" appearance
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.transitionDelay = `${(index % 3) * 0.1}s`;
});

// Mobile menu placeholder (optional enhancement)
// For a premium feel, even a simple mobile interaction helps
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Subtle parallax effect on hero glass card
document.addEventListener('mousemove', (e) => {
    const glassCard = document.querySelector('.main-card');
    if (!glassCard) return;

    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    glassCard.style.transform = `perspective(1000px) rotateY(${mouseX * 10}deg) rotateX(${-mouseY * 10}deg) translateY(${Math.sin(Date.now() / 1000) * 5}px)`;
});
