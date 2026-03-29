// Intersection Observer for Scroll Reveals
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, we can stop observing this element
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal').forEach(element => {
    revealObserver.observe(element);
});

// Navbar logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dynamic staggered delay for all cards
const setStaggeredDelay = (selector, baseDelay = 0.1) => {
    document.querySelectorAll(selector).forEach((card, index) => {
        card.style.transitionDelay = `${(index % 4) * baseDelay}s`;
    });
};

setStaggeredDelay('.feature-card');
setStaggeredDelay('.server-card-mini', 0.15);
setStaggeredDelay('.step-card', 0.2);

// Parallax Effect for Hero glass card
document.addEventListener('mousemove', (e) => {
    const glassCard = document.querySelector('.main-card');
    if (!glassCard) return;

    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (clientX - centerX) / 25;
    const moveY = (clientY - centerY) / 25;

    glassCard.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateY(${Math.sin(Date.now() / 1500) * 8}px)`;
});

// Smooth logo & back-to-top scroll
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelector('.logo').addEventListener('click', scrollToTop);
const backToTopBtn = document.getElementById('backToTop');
backToTopBtn.addEventListener('click', scrollToTop);

// Show/hide backToTop button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Initialize Lucide icons
lucide.createIcons();
