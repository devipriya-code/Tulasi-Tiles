// JavaScript for Interactive Elements
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.tile-card-1, .tile-card-2, .tile-card-3, .tile-card-4, .collection-card, .split-card, .material-card, .gradient-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const cards = document.querySelectorAll('.tile-card-1, .tile-card-2, .tile-card-3, .tile-card-4, .collection-card, .split-card, .material-card, .gradient-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Add hover effect to material icons
    const materialIcons = document.querySelectorAll('.material-icon');
    materialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) rotate(10deg)';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
// About page
// Testimonial Slider
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.about-testimonial-slide');
    const dots = document.querySelectorAll('.about-testimonial-dot');
    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // Dot click event listeners
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });

    // Auto-rotate slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Animate stats counting
    const statCounts = document.querySelectorAll('.about-stat-count');
    const statsSection = document.querySelector('.about-stats');

    function animateStats() {
        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            statCounts.forEach(count => {
                const target = parseInt(count.textContent);
                const suffix = count.textContent.match(/\D+$/) ? count.textContent.match(/\D+$/)[0] : '';
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);

                let current = start;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    count.textContent = Math.floor(current) + suffix;
                }, 16);
            });

            // Remove event listener after animation
            window.removeEventListener('scroll', animateStats);
        }
    }

    window.addEventListener('scroll', animateStats);
});