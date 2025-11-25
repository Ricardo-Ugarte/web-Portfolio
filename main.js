// Main JavaScript for Data Analyst Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initSmoothScroll();
    initParticles();
    initTypedText();
    initHeroChart();
    initScrollReveal();
    initSkillBars();
    initCounters();
    initTextSplitting();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth Scroll Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animated Particles Background
function initParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'data-particle';
    
    // Random positioning
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, 6000 + Math.random() * 4000);
}

// Typed Text Animation
function initTypedText() {
    const typedElement = document.getElementById('typed-text');
    if (!typedElement) return;
    
    new Typed('#typed-text', {
        strings: [
            'Power BI Expert',
            'Microsoft Fabric Specialist', 
            'Data Visualization Pro',
            'Business Intelligence Analyst',
            'DAX & SQL Developer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Hero Chart Initialization
function initHeroChart() {
    const chartContainer = document.getElementById('hero-chart');
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    
    // Sample data for the hero chart
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#3b82f6'
                }
            }
        },
        legend: {
            data: ['Revenue', 'Profit', 'Growth'],
            bottom: 0
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Revenue',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#3b82f6'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(59, 130, 246, 0.3)'
                        }, {
                            offset: 1, color: 'rgba(59, 130, 246, 0.1)'
                        }]
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Profit',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#10b981'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(16, 185, 129, 0.3)'
                        }, {
                            offset: 1, color: 'rgba(16, 185, 129, 0.1)'
                        }]
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Growth',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: '#f59e0b'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(245, 158, 11, 0.3)'
                        }, {
                            offset: 1, color: 'rgba(245, 158, 11, 0.1)'
                        }]
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            }
        ]
    };
    
    chart.setOption(option);
    
    // Animate chart on load
    setTimeout(() => {
        chart.resize();
    }, 100);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                
                setTimeout(() => {
                    bar.style.width = width;
                    bar.style.transition = 'width 1.5s ease-in-out';
                }, 200);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Text Splitting Animation
function initTextSplitting() {
    // Initialize Splitting.js
    if (typeof Splitting !== 'undefined') {
        Splitting();
        
        // Animate split text on hero
        const heroTitle = document.querySelector('[data-splitting]');
        if (heroTitle) {
            const chars = heroTitle.querySelectorAll('.char');
            
            anime({
                targets: chars,
                opacity: [0, 1],
                translateY: [50, 0],
                rotateZ: [10, 0],
                duration: 800,
                delay: anime.stagger(50),
                easing: 'easeOutExpo'
            });
        }
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced scroll effects
window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
}, 10));

// Form validation helper (for contact forms)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Loading animation for charts
function showChartLoading(chartId) {
    const chart = echarts.getInstanceByDom(document.getElementById(chartId));
    if (chart) {
        chart.showLoading();
    }
}

function hideChartLoading(chartId) {
    const chart = echarts.getInstanceByDom(document.getElementById(chartId));
    if (chart) {
        chart.hideLoading();
    }
}

// Error handling for charts
window.addEventListener('error', function(e) {
    console.error('Chart error:', e.error);
    // Gracefully handle chart errors
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab key
    if (e.key === 'Tab' && !e.shiftKey) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        // Add focus indicators
        focusableElements.forEach(el => {
            el.addEventListener('focus', function() {
                this.style.outline = '2px solid #3b82f6';
                this.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
});

// Export functions for use in other pages
window.DataAnalystPortfolio = {
    initMobileMenu,
    initSmoothScroll,
    initScrollReveal,
    initSkillBars,
    validateEmail,
    showChartLoading,
    hideChartLoading
};