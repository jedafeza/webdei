/**
 * DEI - Diseño Eléctrico Inteligente
 * Main JavaScript File
 * 
 * Libraries: GSAP (Core + ScrollTrigger)
 * Interactions: Scroll animations, hover effects, parallax, reveals
 */

(function() {
  'use strict';

  // Wait for DOM ready
  document.addEventListener('DOMContentLoaded', init);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  function init() {
    initHeader();
    initHeroAnimations();
    initScrollAnimations();
    initParallaxEffects();
    initHoverInteractions();
    initCountUpAnimations();
    initSmoothScroll();
    initRevealAnimations();
    initMagneticButtons();
  }

  // ========================
  // Header Effects
  // ========================
  function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });

    // Nav link hover sound effect (optional)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { 
          duration: 0.3, 
          y: -2,
          ease: 'power2.out'
        });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { 
          duration: 0.3, 
          y: 0,
          ease: 'power2.out'
        });
      });
    });
  }

  // ========================
  // Hero Animations
  // ========================
  function initHeroAnimations() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Timeline for hero entrance
    const heroTl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // Animate hero elements sequentially
    heroTl
      .from('.hero-title', {
        duration: 1,
        y: 60,
        opacity: 0,
        stagger: 0.1
      })
      .from('.hero-description', {
        duration: 0.8,
        y: 30,
        opacity: 0
      }, '-=0.6')
      .from('.hero-buttons', {
        duration: 0.6,
        y: 20,
        opacity: 0
      }, '-=0.4')
      .from('.hero-stat', {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1
      }, '-=0.3')
      .from('.hero-visual', {
        duration: 1,
        x: 60,
        opacity: 0,
        ease: 'power2.out'
      }, '-=0.8')
      // Floating animation for card
      .to('.hero-card', {
        duration: 3,
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      }, '-=0.5');

    // Animate stats numbers on load
    animateStatNumbers();
  }

  function animateStatNumbers() {
    const statValues = document.querySelectorAll('.hero-stat-value, .stat-value, .proof-value');
    
    statValues.forEach(stat => {
      const text = stat.textContent;
      const isPercent = text.includes('%');
      const isPlus = text.includes('+');
      
      // Extract number
      const number = parseInt(text.replace(/[^0-9]/g, ''));
      
      if (number && !isNaN(number)) {
        gsap.fromTo(stat, 
          { textContent: 0 },
          {
            textContent: number,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function() {
              this.targets()[0].textContent = Math.round(this.targets()[0].textContent) + (isPercent ? '%' : isPlus ? '+' : '');
            }
          }
        );
      }
    });
  }

  // ========================
  // Scroll Animations (AOS-like)
  // ========================
  function initScrollAnimations() {
    // Features cards
    gsap.utils.toArray('.features-grid .feature-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: i * 0.1
      });
    });

    // Proof cards
    gsap.utils.toArray('.proof-grid .proof-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        y: 40,
        opacity: 0,
        ease: 'power3.out',
        delay: i * 0.1
      });
    });

    // Service cards
    gsap.utils.toArray('.services-grid .service-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        ease: 'power3.out',
        delay: i * 0.15
      });
    });

    // Testimonial cards
    gsap.utils.toArray('.testimonials-grid .testimonial-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.7,
        y: 40,
        opacity: 0,
        ease: 'power3.out',
        delay: i * 0.1
      });
    });

    // FAQ items
    gsap.utils.toArray('.faq-grid .faq-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.5,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: i * 0.1
      });
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      });
    });
  }

  // ========================
  // Parallax Effects
  // ========================
  function initParallaxEffects() {
    // Hero background
    gsap.to('.hero::before', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 200,
      scale: 1.1
    });

    // Hero title parallax
    gsap.to('.hero-title', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 100,
      opacity: 0
    });

    // Proof section background
    gsap.to('.proof::before', {
      scrollTrigger: {
        trigger: '.proof',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      scale: 1.2,
      opacity: 0.5
    });

    // CTA background
    gsap.to('.cta::before', {
      scrollTrigger: {
        trigger: '.cta',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      scale: 1.1,
      opacity: 0.8
    });
  }

  // ========================
  // Hover Interactions
  // ========================
  function initHoverInteractions() {
    // Feature cards hover
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.4,
          y: -6,
          boxShadow: '0 24px 48px -16px rgba(13, 79, 247, 0.15)',
          ease: 'power2.out'
        });
        
        // Animate icon
        const icon = card.querySelector('.feature-icon');
        if (icon) {
          gsap.to(icon, {
            duration: 0.3,
            scale: 1.1,
            backgroundColor: '#0D4FF7',
            ease: 'power2.out'
          });
          
          const svg = icon.querySelector('svg, i');
          if (svg) {
            gsap.to(svg, {
              duration: 0.3,
              color: '#FFFFFF',
              ease: 'power2.out'
            });
          }
        }
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.4,
          y: 0,
          boxShadow: 'none',
          ease: 'power2.out'
        });
        
        const icon = card.querySelector('.feature-icon');
        if (icon) {
          gsap.to(icon, {
            duration: 0.3,
            scale: 1,
            backgroundColor: '#DBEAFE',
            ease: 'power2.out'
          });
          
          const svg = icon.querySelector('svg, i');
          if (svg) {
            gsap.to(svg, {
              duration: 0.3,
              color: '#0D4FF7',
              ease: 'power2.out'
            });
          }
        }
      });
    });

    // Service cards hover
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.4,
          scale: 1.02,
          boxShadow: '0 24px 48px -16px rgba(13, 79, 247, 0.15)',
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.4,
          scale: 1,
          boxShadow: 'none',
          ease: 'power2.out'
        });
      });
    });

    // Testimonial cards hover
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.4,
          y: -4,
          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.08)',
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.4,
          y: 0,
          boxShadow: 'none',
          ease: 'power2.out'
        });
      });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          duration: 0.3,
          scale: 1.02,
          y: -2,
          ease: 'power2.out'
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          duration: 0.3,
          scale: 1,
          y: 0,
          ease: 'power2.out'
        });
      });
    });

    // Logo hover
    const logo = document.querySelector('.logo');
    if (logo) {
      const logoIcon = logo.querySelector('.logo-icon');
      if (logoIcon) {
        logo.addEventListener('mouseenter', () => {
          gsap.to(logoIcon, {
            duration: 0.5,
            rotation: -5,
            scale: 1.05,
            ease: 'back.out(1.7)'
          });
        });
        
        logo.addEventListener('mouseleave', () => {
          gsap.to(logoIcon, {
            duration: 0.5,
            rotation: 0,
            scale: 1,
            ease: 'back.out(1.7)'
          });
        });
      }
    }

    // Footer links hover
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          duration: 0.3,
          x: 4,
          ease: 'power2.out'
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          duration: 0.3,
          x: 0,
          ease: 'power2.out'
        });
      });
    });
  }

  // ========================
  // Count Up Animations
  // ========================
  function initCountUpAnimations() {
    const proofValues = document.querySelectorAll('.proof-value');
    
    proofValues.forEach((el, i) => {
      const text = el.textContent;
      const isPercent = text.includes('%');
      
      const number = parseInt(text.replace(/[^0-9]/g, ''));
      
      if (number && !isNaN(number)) {
        const obj = { val: 0 };
        
        gsap.to(obj, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          val: number,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            el.textContent = Math.round(obj.val) + (isPercent ? '%' : '');
          }
        });
      }
    });
  }

  // ========================
  // Smooth Scroll
  // ========================
  function initSmoothScroll() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: target,
              offsetY: 80
            },
            ease: 'power3.inOut'
          });
        }
      });
    });
  }

  // ========================
  // Reveal Animations
  // ========================
  function initRevealAnimations() {
    // Intersection Observer for reveal on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements
    const revealElements = document.querySelectorAll(
      '.feature-card, .proof-card, .service-card, .testimonial-card, .faq-item'
    );
    revealElements.forEach(el => {
      el.classList.add('gsap-hidden');
      observer.observe(el);
    });
  }

  // ========================
  // Magnetic Buttons
  // ========================
  function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    magneticButtons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          duration: 0.3,
          x: x * 0.1,
          y: y * 0.1,
          ease: 'power2.out'
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });
  }

})();

// ========================
// Standalone Functions for External Use
// ========================

// Animated counter
function animateCounter(element, start, end, duration = 2000) {
  gsap.to(element, {
    textContent: end,
    duration: duration / 1000,
    snap: { textContent: 1 },
    onUpdate: function() {
      element.textContent = Math.round(this.targets()[0].textContent);
    }
  });
}

// Reveal element
function revealElement(element, options = {}) {
  const defaults = {
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  };
  
  gsap.from(element, { ...defaults, ...options });
}

// Parallax element
function parallaxElement(element, speed = 0.5) {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    },
    y: 100 * speed,
    ease: 'none'
  });
}

// Export for use in console
window.DEI = {
  animateCounter,
  revealElement,
  parallaxElement
};