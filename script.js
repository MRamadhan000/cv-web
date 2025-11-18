document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation hamburger menu
    function createHamburgerMenu() {
        const nav = document.querySelector('nav .container');
        const navLinks = document.querySelector('.nav-links');
        
        if (nav && navLinks && window.innerWidth <= 768) {
            let hamburger = document.querySelector('.hamburger');
            
            if (!hamburger) {
                hamburger = document.createElement('div');
                hamburger.className = 'hamburger';
                hamburger.innerHTML = '<span></span><span></span><span></span>';
                nav.appendChild(hamburger);
            }
            
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
                
                // Prevent body scroll when menu is open
                if (navLinks.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close menu when clicking on a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }

    // Initialize hamburger menu
    createHamburgerMenu();
    
    // Re-initialize on window resize
    window.addEventListener('resize', () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth > 768) {
            if (hamburger) hamburger.remove();
            if (navLinks) {
                navLinks.classList.remove('active');
                navLinks.style.display = '';
            }
            document.body.style.overflow = 'auto';
        } else {
            createHamburgerMenu();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced navbar scroll effect with futuristic styling
    let lastScroll = 0;
    const navbar = document.querySelector('nav');

    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.style.background = 'rgba(6, 11, 20, 0.98)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 153, 255, 0.3)';
                navbar.style.borderBottom = '1px solid rgba(0, 153, 255, 0.4)';
                navbar.style.backdropFilter = 'blur(25px)';
            } else {
                navbar.style.background = 'rgba(6, 11, 20, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 153, 255, 0.1)';
                navbar.style.borderBottom = '1px solid rgba(0, 153, 255, 0.2)';
                navbar.style.backdropFilter = 'blur(20px)';
            }

            // Hide/show navbar on mobile scroll
            if (window.innerWidth <= 768) {
                if (currentScroll > lastScroll && currentScroll > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }

            lastScroll = currentScroll;
        });
    }

    // Parallax effect for header (disabled on mobile for performance)
    const header = document.querySelector('header');
    if (header && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            header.style.transform = `translateY(${rate}px)`;
        });
    }

    // Optimized Intersection Observer for scroll animations
    const observerOptions = {
        threshold: window.innerWidth <= 768 ? 0.05 : 0.1,
        rootMargin: window.innerWidth <= 768 ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animation for skill items
                if (entry.target.classList.contains('skill-category')) {
                    const skillItems = entry.target.querySelectorAll('.skill-item');
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.transform = 'translateY(0) scale(1)';
                            item.style.opacity = '1';
                        }, index * 50); // Faster animation on mobile
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .contact-item, .about-content, .education-item');
    animatedElements.forEach(el => observer.observe(el));

    // Reduced cyber glitch effect for mobile performance
    const navBrand = document.querySelector('.nav-brand');
    if (navBrand) {
        const glitchInterval = window.innerWidth <= 768 ? 5000 : 3000;
        setInterval(() => {
            navBrand.style.textShadow = `
                0 0 5px #0099ff,
                0 0 10px #0099ff,
                0 0 15px #0099ff,
                ${Math.random() * 2}px ${Math.random() * 2}px 0 #00ccff
            `;
            setTimeout(() => {
                navBrand.style.textShadow = '0 0 15px rgba(0, 153, 255, 0.8)';
            }, 100);
        }, glitchInterval);
    }

    // Optimized particle system
    let particleCount = 0;
    const maxParticles = window.innerWidth <= 768 ? 15 : 30;
    const particleInterval = window.innerWidth <= 768 ? 800 : 300;

    function createParticle() {
        if (particleCount >= maxParticles) return;
        
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 2 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() > 0.5 ? '0, 153, 255' : '51, 153, 255'}, ${Math.random() * 0.4 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '-10px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.boxShadow = `0 0 4px rgba(0, 153, 255, 0.6)`;
        
        document.body.appendChild(particle);
        particleCount++;
        
        const animationDuration = Math.random() * 2000 + 3000;
        const drift = Math.random() * 50 - 25;
        
        particle.animate([
            { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
            { transform: 'translateY(30px) translateX(' + (drift * 0.3) + 'px)', opacity: 1, offset: 0.1 },
            { transform: 'translateY(' + (window.innerHeight + 10) + 'px) translateX(' + drift + 'px)', opacity: 0 }
        ], {
            duration: animationDuration,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
            particleCount--;
        };
    }

    // Create particles periodically
    setInterval(createParticle, particleInterval);

    // Optimized mouse tracking (disabled on mobile)
    if (window.innerWidth > 768) {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Update CSS custom properties for mouse position
            document.documentElement.style.setProperty('--mouse-x', mouseX + 'px');
            document.documentElement.style.setProperty('--mouse-y', mouseY + 'px');
        });
    }

    // Responsive typing effect for header text
    const headerTitle = document.querySelector('.header-text h1');
    if (headerTitle) {
        const originalText = headerTitle.textContent;
        headerTitle.textContent = '';
        
        let index = 0;
        const typingSpeed = window.innerWidth <= 768 ? 80 : 100;
        
        function typeWriter() {
            if (index < originalText.length) {
                headerTitle.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Handle profile image error
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            this.style.display = 'none';
            const fallbackText = document.createElement('div');
            fallbackText.textContent = 'AP';
            fallbackText.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: ${window.innerWidth <= 768 ? '40px' : '80px'};
                font-weight: 900;
                color: var(--white);
                z-index: 3;
                text-shadow: 0 0 20px rgba(0, 153, 255, 0.8);
            `;
            this.parentElement.appendChild(fallbackText);
        });

        profileImage.addEventListener('load', function() {
            // Remove any fallback text when image loads successfully
            const fallback = this.parentElement.querySelector('div');
            if (fallback && fallback.textContent === 'AP') {
                fallback.remove();
            }
        });
    }

    // Handle project images error
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(img => {
        img.addEventListener('error', function() {
            // Create fallback gradient background
            const overlay = this.parentElement.querySelector('.project-overlay');
            this.style.display = 'none';
            this.parentElement.style.background = 'linear-gradient(135deg, var(--dark-blue), var(--primary-blue))';
            
            // Make overlay visible by default
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.background = 'linear-gradient(135deg, rgba(0, 153, 255, 0.6), rgba(51, 153, 255, 0.6))';
            }
        });

        img.addEventListener('load', function() {
            // Ensure overlay is hidden when image loads
            const overlay = this.parentElement.querySelector('.project-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });

    // Initialize skill items animation setup
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.style.transform = 'translateY(20px) scale(0.9)';
        item.style.opacity = '0';
        item.style.transition = 'all 0.3s ease';
    });

    // Optimize touch events for mobile
    if ('ontouchstart' in window) {
        document.addEventListener('touchstart', function() {}, {passive: true});
        document.addEventListener('touchmove', function() {}, {passive: true});
    }

    // Viewport height fix for mobile browsers
    function setVh() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Responsive navigation transitions */
    nav {
        transition: all 0.3s ease;
    }
    
    .nav-links {
        transition: all 0.3s ease;
    }
    
    /* Mobile viewport height fix */
    .full-height {
        height: 100vh;
        height: calc(var(--vh, 1vh) * 100);
    }
    
    /* Optimized hover effects for touch devices */
    @media (hover: none) {
        .skill-item:hover,
        .project-card:hover,
        .contact-item:hover,
        .education-item:hover,
        .btn:hover {
            transform: none;
            box-shadow: inherit;
        }
        
        /* Touch-friendly active states */
        .skill-item:active {
            transform: scale(0.95);
        }
        
        .btn:active {
            transform: scale(0.98);
        }
        
        .project-card:active {
            transform: translateY(-5px);
        }
    }
    
    /* Reduce motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        
        .profile-photo::before {
            animation: none;
        }
        
        body::after {
            animation: none;
        }
    }
    
    /* Focus management for keyboard navigation */
    .nav-links a:focus,
    .btn:focus,
    .skill-item:focus {
        outline: 2px solid var(--accent-cyan);
        outline-offset: 2px;
    }
    
    /* Performance optimizations */
    .project-card,
    .skill-category,
    .contact-item {
        will-change: transform;
        backface-visibility: hidden;
        transform: translateZ(0);
    }
    
    /* Cyber cursor trail (desktop only) */
    @media (min-width: 769px) {
        body::after {
            content: '';
            position: fixed;
            top: var(--mouse-y, 0);
            left: var(--mouse-x, 0);
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, rgba(0, 153, 255, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease;
        }
    }
`;
document.head.appendChild(style);