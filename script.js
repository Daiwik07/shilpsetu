const navbar = document.getElementById('navbar');

if (navbar) {
    navbar.innerHTML = `
        <div class="nav-container">
            <img src="cyberfair.png" alt="CyberFair" style="height: 70px;">
            <ul class="nav-links" id="navLinks">
                <li class="nav-item" style="--i: 0">
                    <a href="index.html" class="nav-link active">
                        <span class="nav-icon" aria-hidden="true"></span>
                        <span class="nav-text">Home</span>
                        <span class="nav-indicator"></span>
                    </a>
                </li>
                <li class="nav-item" style="--i: 1">
                    <a href="Overview.html" class="nav-link dropdown-toggle">
                        <span class="nav-text">Project Summary</span>
                        <span class="dropdown-arrow"><i class="fas fa-chevron-down"></i></span>
                        <span class="nav-indicator"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="Narrative.html" class="dropdown-item"><i class="fas fa-star"></i> Narrative</a></li>
                        <li><a href="summary.html" class="dropdown-item"><i class="fas fa-star"></i> Project Summary</a></li>
                        <li><a href="learning.html" class="dropdown-item"><i class="fas fa-bullseye"></i>Learning</a></li>
                        <li><a href="project-layout.html" class="dropdown-item"><i class="fas fa-users"></i> Layout</a></li>
                    </ul>
                </li>
                <li class="nav-item" style="--i: 5">
                    <a href="shilpsetu.html" class="nav-link">
                        <span class="nav-text">Shilpsetu</span>
                        <span class="nav-indicator"></span>
                    </a>
                </li>
                <li class="nav-item" style="--i: 1">
                    <a href="Overview.html" class="nav-link dropdown-toggle">
                        <span class="nav-text">Collabrators</span>
                        <span class="dropdown-arrow"><i class="fas fa-chevron-down"></i></span>
                        <span class="nav-indicator"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="student.html" class="dropdown-item"><i class="fas fa-star"></i> Students</a></li>
                        <li><a href="teacher.html" class="dropdown-item"><i class="fas fa-bullseye"></i> Faculty</a></li>
                    </ul>
                </li>
                 <li class="nav-item" style="--i: 1">
                    <a href="Overview.html" class="nav-link dropdown-toggle">
                        <span class="nav-text">Research</span>
                        <span class="dropdown-arrow"><i class="fas fa-chevron-down"></i></span>
                        <span class="nav-indicator"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="aboutHandicrafts.html" class="dropdown-item"><i class="fas fa-star"></i> About Indian Handicrafters</a></li>
                        <li><a href="famoushandicrafts.html" class="dropdown-item"><i class="fas fa-bullseye"></i>Famous Handicrafts</a></li>
                        <li><a href="soulOfIndia.html" class="dropdown-item"><i class="fas fa-users"></i> Soul of India</a></li>
                        <li><a href="gallery.html" class="dropdown-item"><i class="fas fa-users"></i> Gallery</a></li>
                        <li><a href="shop.html" class="dropdown-item"><i class="fas fa-users"></i> Shop</a></li>
                        <li><a href="timeline.html" class="dropdown-item"><i class="fas fa-users"></i> Timeline</a></li>
                        <li><a href="biblography.html" class="dropdown-item"><i class="fas fa-users"></i> Biblography</a></li>
                    </ul>
                </li>
                <li class="nav-item" style="--i: 1">
                    <a href="echoes.html" class="nav-link dropdown-toggle">
                        <span class="nav-text">Untold</span>
                        <span class="nav-indicator"></span>
                    </a>
                </li>
                <li class="nav-item" style="--i: 4">
                    <a href="rejuvenation.html" class="nav-link">
                        <span class="nav-text">Rejuvenation </span>
                        <span class="nav-indicator"></span>
                    </a>
                </li>
                <li class="nav-item" style="--i: 1">
                    <a href="help.html" class="nav-link dropdown-toggle">
                        <span class="nav-text">Help</span>
                        <span class="nav-indicator"></span>
                    </a>
                </li>
                <li class="nav-item" style="--i: 1">
                    <a href="Overview.html" class="nav-link dropdown-toggle">
                        <span class="nav-text">Initiatives</span>
                        <span class="dropdown-arrow"><i class="fas fa-chevron-down"></i></span>
                        <span class="nav-indicator"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="preserve-crafts.html" class="dropdown-item"><i class="fas fa-star"></i> Preserve Craft</a></li>
                        <li><a href="fair-income.html" class="dropdown-item"><i class="fas fa-bullseye"></i>Fair Income</a></li>
                        <li><a href="digital-awareness.html" class="dropdown-item"><i class="fas fa-users"></i> Digital Awareness</a></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    `;
}

const navItems = document.querySelectorAll('.nav-link');
let lastScroll = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            ticking = false;
        });
        ticking = true;
    }
});
if (window.innerWidth > 1024) {
    navItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            item.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate(0, 0)';
        });
    });
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    const dropdownMenu = toggle.nextElementSibling;
    
    if (!dropdownMenu || !dropdownMenu.classList.contains('dropdown-menu')) return;
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('active');
            }
        });
        dropdownMenu.classList.toggle('active');
    });
    if (window.innerWidth > 1024) {
        toggle.parentElement.addEventListener('mouseenter', function() {
            dropdownMenu.classList.add('active');
        });
        
        toggle.parentElement.addEventListener('mouseleave', function() {
            dropdownMenu.classList.remove('active');
        });
    }
    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            setTimeout(() => {
                dropdownMenu.classList.remove('active');
            }, 100);
        });
    });
});
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = decodeURIComponent(
        window.location.pathname.split('/').pop() || 'index.html'
    ).toLowerCase();

    navLinks.forEach(link => link.classList.remove('active'));

    let isMatched = false;
    navLinks.forEach(link => {
        if (isMatched) return;

        const hrefValue = link.getAttribute('href');
        if (!hrefValue || hrefValue.startsWith('#')) return;

        const linkPage = decodeURIComponent(
            new URL(hrefValue, window.location.href).pathname.split('/').pop() || ''
        ).toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add('active');
            isMatched = true;
        }
    });

    if (!isMatched) {
        const homeLink = document.querySelector('.nav-link[href="index.html"]');
        if (homeLink) homeLink.classList.add('active');
    }
});
const footer = document.getElementById('footer');
if (footer) {
    footer.innerHTML = `
        <div class="footer-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path fill="#3d2817" d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z"></path>
            </svg>
        </div>
        
        <div class="footer-main">
            <div class="footer-container">
                <div class="footer-section school-section">
                    <a href="http://www.aravali.edu.in/" target="_blank" class="footer-logo-link">
                        <img src="https://www.cloudflar.info/aaravali_website/images/header-newlogo.webp" alt="Aravali International School" class="footer-logo-img">
                    </a>
                    <h3 class="footer-title">Aravali International School</h3>
                    <address class="footer-address">
                        <p><i class="fas fa-map-marker-alt"></i> Sector - 43, Faridabad, Haryana, India - 121003</p>
                        <p><i class="fas fa-phone"></i> +91-129-4277000, +91-129-4278000</p>
                        <p><i class="fas fa-envelope"></i> <a href="mailto:info@aravali.edu.in">info@aravali.edu.in</a></p>
                    </address>
                </div>

                <div class="footer-section website-section">
                    <div class="footer-brand">
                        <span class="footer-brand-name">ShilpSetu</span>
                        <p class="footer-tagline">Bridge to Traditional Crafts</p>
                    </div>
                    <p class="footer-description">
                        Connecting artisans with the world, preserving India's rich handicraft heritage one craft at a time.
                    </p>
                    <div class="footer-links">
                        <a href="index.html"><i class="fas fa-home"></i> Home</a>
                        <a href="Overview.html"><i class="fas fa-info-circle"></i> Overview</a>
                        <a href="Products.html"><i class="fas fa-shopping-bag"></i> Products</a>
                        <a href="About Us.html"><i class="fas fa-users"></i> About Us</a>
                    </div>
                </div>

                <div class="footer-section cyberfair-section">
                    <a href="http://globalschoolnet.org/" target="_blank" class="footer-logo-link">
                        <img src="http://globalschoolnet.org/gsncf/images/2026/cf2026.jpg" alt="CyberFair 2026" class="cyberfair-logo">
                    </a>
                    <h3 class="footer-title">CyberFair 2026</h3>
                    <p class="footer-description">
                        Proud participant in the International Schools CyberFair - connecting students globally through digital citizenship.
                    </p>
                    <a href="http://globalschoolnet.org/" target="_blank" class="footer-logo-link gsn-link">
                        <img src="http://globalschoolnet.org/gsncf/images/2026/CFParticipantBanner2026.jpg" alt="Global School Net" class="gsn-logo" style="width: 100%;">
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p>&copy; 2026 ShilpSetu | Crafted with <span class="heart">❤️</span> by Aravali International School</p>
                <p class="footer-credits">CyberFair Project - Preserving India's Handicraft Heritage</p>
            </div>
        </div>`;
}
const mascotMessages = {
    'index.html': [
        "🙏 Namaste! Welcome to ShilpSetu! I'm Shilpi, your guide to India's beautiful handicrafts. Click on me anytime for help!",
        "🎨 Did you know? India has over 3,000 traditional craft forms! Let me show you some amazing ones.",
        "🏺 ShilpSetu means 'Bridge of Crafts' - connecting you with India's artisan heritage!",
        "✨ Explore our pages to discover the magic of handmade traditions!"
    ],
    'Overview.html': [
        "📖 Here you'll learn about our mission to preserve traditional crafts!",
        "🌟 We work directly with artisans from remote villages across India.",
        "💪 Every purchase supports a craftsman's family and keeps traditions alive!"
    ],
    'Narrative.html': [
        "📚 Every craft tells a story passed down through generations!",
        "🎭 From the looms of Varanasi to the pottery wheels of Khurja...",
        "❤️ These stories connect us to our rich cultural heritage."
    ],
    'Products.html': [
        "🛍️ Browse handcrafted treasures made with love and tradition!",
        "🎁 Each piece is unique - no two are exactly alike!",
        "🏆 Quality craftsmanship that supports real artisan families."
    ],
    'Surveys.html': [
        "📊 Your feedback helps us understand craft lovers better!",
        "📝 We survey artisans and customers to improve our work.",
        "🤝 Together, we can make a bigger impact!"
    ],
    'Expectations.html': [
        "🎯 Learn about our goals and what we hope to achieve!",
        "🚀 We're on a mission to revive endangered craft forms.",
        "🌈 Help us build a sustainable future for artisans!"
    ],
    'About Us.html': [
        "👋 Meet the team behind ShilpSetu!",
        "🏫 We're students passionate about preserving India's craft heritage.",
        "📧 Have questions? We'd love to hear from you!"
    ],
    'Problems.html': [
        "⚠️ Understanding the challenges artisans face helps us find solutions!",
        "💡 Many artisans struggle with market access and fair pricing.",
        "🤝 Together, we can help overcome these obstacles!"
    ]
};
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return page;
}
function getRandomMessage() {
    const page = getCurrentPage();
    const messages = mascotMessages[page] || mascotMessages['index.html'];
    return messages[Math.floor(Math.random() * messages.length)];
}
document.addEventListener('DOMContentLoaded', function() {
    const mascot = document.getElementById('mascot');
    const mascotChar = document.getElementById('mascotChar');
    const speechBubble = document.getElementById('speechBubble');
    const mascotMessage = document.getElementById('mascotMessage');
    const closeSpeech = document.getElementById('closeSpeech');
    
    if (!mascot || !mascotChar) return;
    
    let messageIndex = 0;
    let autoMessageTimer;
    setTimeout(() => {
        if (speechBubble) {
            speechBubble.classList.remove('hidden');
        }
    }, 1500);
    mascotChar.addEventListener('click', function() {
        if (speechBubble.classList.contains('hidden')) {
            speechBubble.classList.remove('hidden');
        }
        mascotMessage.innerHTML = '<div class="mascot-thinking"><span></span><span></span><span></span></div>';
        
        setTimeout(() => {
            mascotMessage.textContent = getRandomMessage();
            speechBubble.style.animation = 'none';
            speechBubble.offsetHeight; // Trigger reflow
            speechBubble.style.animation = 'bubblePop 0.4s ease-out';
        }, 600);
        clearTimeout(autoMessageTimer);
        startAutoMessage();
    });
    if (closeSpeech) {
        closeSpeech.addEventListener('click', function(e) {
            e.stopPropagation();
            speechBubble.classList.add('hidden');
            clearTimeout(autoMessageTimer);
        });
    }
    function startAutoMessage() {
        autoMessageTimer = setTimeout(() => {
            if (!speechBubble.classList.contains('hidden')) {
                mascotMessage.textContent = getRandomMessage();
                speechBubble.style.animation = 'none';
                speechBubble.offsetHeight;
                speechBubble.style.animation = 'bubblePop 0.4s ease-out';
            }
            startAutoMessage();
        }, 15000); // New message every 15 seconds
    }
    
    startAutoMessage();
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            mascot.style.transform = 'translateX(120px)';
            mascot.style.opacity = '0.3';
        } else {
            mascot.style.transform = 'translateX(0)';
            mascot.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
    mascot.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
});
 document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.nav-link.dropdown-toggle');

    toggles.forEach(function (toggle) {
      const menu = toggle.parentElement.querySelector('.dropdown-menu');
      if (!menu) return;

      toggle.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        document.querySelectorAll('.dropdown-menu.active').forEach(function (openMenu) {
          if (openMenu !== menu) openMenu.classList.remove('active');
        });

        menu.classList.toggle('active');
      });
    });

    document.addEventListener('click', function () {
      document.querySelectorAll('.dropdown-menu.active').forEach(function (openMenu) {
        openMenu.classList.remove('active');
      });
    });
  });

  const items = document.querySelectorAll(".timeline-item");
const timeline = document.querySelector(".timeline");

function reveal(){

let trigger = window.innerHeight * 0.85;

items.forEach(item => {

let top = item.getBoundingClientRect().top;

if(top < trigger){
item.classList.add("show");
}

});

let timelineTop = timeline.getBoundingClientRect().top;

if(timelineTop < trigger){
timeline.classList.add("animate");
}

}

window.addEventListener("scroll",reveal);
reveal();
