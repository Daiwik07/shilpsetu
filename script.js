const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.nav-link');

// Scroll Handler with RequestAnimationFrame
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

// Magnetic Hover Effect
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
        // 1. Remove 'active' class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        
        // 2. Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 1. Get the current URL path (e.g., /narrative.html)
    const currentPath = window.location.pathname;

    // 2. Select all your navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // 3. Remove "active" from everyone first to reset
        link.classList.remove('active');

        // 4. If the link's href matches the current path, add the "active" class
        if (link.getAttribute('href') === currentPath || link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

// ===== MASCOT FUNCTIONALITY =====
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

// Get current page
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return page;
}

// Get random message for current page
function getRandomMessage() {
    const page = getCurrentPage();
    const messages = mascotMessages[page] || mascotMessages['index.html'];
    return messages[Math.floor(Math.random() * messages.length)];
}

// Initialize mascot when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const mascot = document.getElementById('mascot');
    const mascotChar = document.getElementById('mascotChar');
    const speechBubble = document.getElementById('speechBubble');
    const mascotMessage = document.getElementById('mascotMessage');
    const closeSpeech = document.getElementById('closeSpeech');
    
    if (!mascot || !mascotChar) return;
    
    let messageIndex = 0;
    let autoMessageTimer;
    
    // Show initial message after a delay
    setTimeout(() => {
        if (speechBubble) {
            speechBubble.classList.remove('hidden');
        }
    }, 1500);
    
    // Click on mascot to get new message
    mascotChar.addEventListener('click', function() {
        if (speechBubble.classList.contains('hidden')) {
            speechBubble.classList.remove('hidden');
        }
        
        // Show typing effect
        mascotMessage.innerHTML = '<div class="mascot-thinking"><span></span><span></span><span></span></div>';
        
        setTimeout(() => {
            mascotMessage.textContent = getRandomMessage();
            speechBubble.style.animation = 'none';
            speechBubble.offsetHeight; // Trigger reflow
            speechBubble.style.animation = 'bubblePop 0.4s ease-out';
        }, 600);
        
        // Reset auto-message timer
        clearTimeout(autoMessageTimer);
        startAutoMessage();
    });
    
    // Close speech bubble
    if (closeSpeech) {
        closeSpeech.addEventListener('click', function(e) {
            e.stopPropagation();
            speechBubble.classList.add('hidden');
            clearTimeout(autoMessageTimer);
        });
    }
    
    // Auto-show new messages periodically
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
    
    // Hide mascot on scroll down, show on scroll up
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            mascot.style.transform = 'translateX(120px)';
            mascot.style.opacity = '0.3';
        } else {
            // Scrolling up
            mascot.style.transform = 'translateX(0)';
            mascot.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add transition for smooth hide/show
    mascot.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
});