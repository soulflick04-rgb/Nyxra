/**
 * NYXRA Website - Main JavaScript
 * Handles: Mobile menu, scroll animations, form handling, smooth scroll, nav shrink
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.querySelector('.material-symbols-outlined').textContent = 'close';
            }
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.querySelector('.material-symbols-outlined').textContent = 'menu';
            });
        });
    }

    // ==========================================
    // Scroll-Triggered Animations (IntersectionObserver)
    // ==========================================
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    if (scrollElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger the animation slightly for each element
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        scrollElements.forEach(el => observer.observe(el));
    }

    // ==========================================
    // Nav Shrink on Scroll
    // ==========================================
    const mainNav = document.getElementById('main-nav');
    let lastScrollY = 0;

    if (mainNav) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                mainNav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
            } else {
                mainNav.style.boxShadow = 'none';
            }

            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // ==========================================
    // Contact Form Handling
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!name || !email || !message) {
                // Shake the submit button for feedback
                submitBtn.classList.add('animate-shake');
                setTimeout(() => submitBtn.classList.remove('animate-shake'), 500);
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                const emailInput = document.getElementById('email');
                emailInput.style.borderColor = '#ba1a1a';
                setTimeout(() => { emailInput.style.borderColor = ''; }, 2000);
                return;
            }

            // Simulate sending (replace with real API call in production)
            submitBtn.innerHTML = '<span class="relative z-10 flex items-center gap-2">Sending... <span class="material-symbols-outlined text-sm animate-spin">progress_activity</span></span>';
            submitBtn.disabled = true;

            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.classList.remove('hidden');
                formSuccess.classList.add('animate-fade-in-up');
            }, 1500);
        });

        // Add focus effects to form inputs
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    }

    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // Image Lazy Loading Enhancement
    // ==========================================
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // ==========================================
    // Keyboard Accessibility for Accordions
    // ==========================================
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });

    // ==========================================
    // Active Page Navigation Highlight
    // ==========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // This is already handled via HTML, but we keep it for SPA-style if needed
});
