// ===================== GLOBAL VARIABLES & SETUP =====================
// DOM Elements
const lanternsContainer = document.getElementById('lanterns');
const releaseBtn = document.getElementById('releaseBtn');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const popupMsg = document.getElementById('popupMsg');
const nextWishBtn = document.getElementById('nextWishBtn');
const closeWishBtn = document.getElementById('closeWishBtn');
const bgMusic = document.getElementById('bgMusic');
const musicToggleBtn = document.getElementById('musicToggle');

bgMusic.volume = 0.3;
bgMusic.play();

// Show and fade welcome popup
// Show, animate, and allow closing of welcome popup
window.addEventListener('DOMContentLoaded', function() {
    const welcomePopup = document.getElementById('welcomePopup');
    const closeBtn = document.getElementById('closeWelcomePopup');
    if (welcomePopup) {
        // Fade in
        setTimeout(() => {
            welcomePopup.style.opacity = '1';
        }, 500);
        // Manual close
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                welcomePopup.style.opacity = '0';
                setTimeout(() => {
                    welcomePopup.style.display = 'none';
                }, 1200);
                clearTimeout(autoFade);
                clearTimeout(autoRemove);
            });
        }
    }
});

if (musicToggleBtn && bgMusic) {
    musicToggleBtn.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggleBtn.textContent = '🎵 Tắt Nhạc';
        } else {
            bgMusic.pause();
            musicToggleBtn.textContent = '🎵 Bật Nhạc';
        }
    });
    // Set initial button text
    musicToggleBtn.textContent = bgMusic.paused ? '🎵 Bật Nhạc' : '🎵 Tắt Nhạc';
}





// Data Arrays (TODO: Add ~20 images here, e.g., 'path/to/photo1.jpg', and ~20 wishes)
const images = [
    'images/IMG_3461.JPG',
    'images/IMG_3462.JPG',
    'images/IMG_3463.JPG',
    'images/IMG_3464.JPG',
    'images/IMG_3465.JPG',
    'images/IMG_3466.JPG',
    'images/IMG_3467.JPG',
    'images/IMG_3468.JPG',
    'images/IMG_3469.JPG',
    'images/IMG_3470.JPG',
    'images/IMG_3471.JPG',
    'images/IMG_3472.JPG',
    'images/IMG_3473.JPG',
    'images/IMG_3474.JPG',
    'images/IMG_3475.JPG',
    'images/IMG_3476.JPG',
    'images/IMG_3477.JPG',
    'images/IMG_3478.JPG',
    'images/IMG_3479.JPG',
    'images/IMG_3480.JPG',
    'images/IMG_3481.JPG',
    'images/IMG_3687.JPG',
    'images/IMG_3688.JPG',
    'images/IMG_3689.JPG',
    'images/IMG_3690.JPG',
    'images/IMG_3691.JPG',
    'images/IMG_3693.JPG',
    'https://via.placeholder.com/400x640/ff69b4/fff?text=Img2', // Placeholder 2
    // TODO: Add more images: 'photo3.jpg', ..., up to 20
];
const wishes = [
'🌕Trung Thu đến rồi, mong mọi buồn phiền tan biến, chỉ còn lại bình an và niềm vui.',
'🌺Chúc đêm rằm của bạn thật yên ả, để tâm hồn được thảnh thơi sau những ngày mệt mỏi.',
'💫Nếu có điều gì làm bạn buồn, hãy để ánh trăng dịu dàng đêm nay xoa dịu tất cả.',
'🎉Trung Thu là Tết đoàn viên, chúc bạn luôn được ở cạnh những người yêu thương nhất.',
'🌟Mong bạn luôn tìm thấy nụ cười, ngay cả trong những ngày tưởng chừng khó khăn nhất.',
'🌸Chúc bạn có một mùa Trung Thu ấm áp, lòng nhẹ nhàng như vầng trăng sáng trên cao.',
'🧡Đêm nay trăng sáng thật đẹp, hy vọng tâm trạng bạn cũng sẽ trong trẻo như thế.',
'✨Chúc Trung Thu mang đến cho bạn sự bình yên và những điều ngọt ngào.',
'🍂Trăng rằm tròn đầy, cầu mong hạnh phúc cũng tròn đầy trong tim bạn.',
'🌕Chúc bạn Trung Thu vui vẻ, và luôn tìm thấy niềm tin để bước tiếp.',
'🏮Dù có mệt mỏi đến đâu, mong đêm trăng này sẽ tiếp thêm năng lượng cho bạn.',
'🐇Trung Thu là dịp để gác lại lo toan, chúc bạn thật nhiều an nhiên.',
'🎇Trăng có lúc khuyết lúc tròn, nhưng mong nụ cười của bạn thì luôn trọn vẹn.',
'🎀Chúc bạn một đêm rằm nhiều ánh sáng, soi tỏ những điều tốt đẹp phía trước.',
'🌟Mong bạn luôn cảm nhận được yêu thương, dù ở bất cứ nơi đâu.',
'🦋Trung Thu không chỉ có bánh, có đèn, mà còn có niềm hy vọng cho một khởi đầu mới.',
'🤍Chúc bạn luôn giữ được trái tim trong trẻo, bất kể cuộc sống ngoài kia ra sao.',
'💌Trăng Trung Thu sáng ngời, mong tâm hồn bạn cũng rực rỡ như thế.',
'💞Chúc bạn thật nhiều bình an và hạnh phúc, không để nỗi buồn ghé ngang quá lâu.',
'💘Mong Trung Thu sẽ mang đến cho bạn sự dịu dàng và những điều tốt đẹp nhất.',
'🌕 Trung Thu đến rồi, mong mọi buồn phiền của bạn sẽ vơi đi.',
'🥮 Chúc bạn một mùa trăng an lành, nhẹ nhõm và nhiều niềm vui.',
'🎑 Đêm rằm soi sáng, hy vọng tâm hồn bạn cũng bình yên như thế.',
'🏮 Chúc bạn Trung Thu thật ấm áp, để nụ cười luôn hiện trên môi.',
'🐇 Mong rằng mọi lo âu sẽ trôi đi, để chỉ còn lại hạnh phúc.',
'🎀 Chúc bạn một đêm rằm dịu dàng, lòng thanh thản và bình an.',
'🌸 Trung Thu này, mong bạn tìm lại sự nhẹ nhàng trong tim.',
];

let currentWishIndex = 0;

// Background Music (TODO: Add play/pause controls)


// ===================== STAR GENERATION (TWINKLING + SHOOTING, BRIGHTER, DIAGONAL) =====================
// Generate 100+ twinkling stars
function generateTwinkleStars(count = 150) { // Increased for more density
    const starsContainer = document.querySelector('.stars-container');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'twinkle-star';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.width = star.style.height = (0.5 + Math.random() * 2.5) + 'px'; // Varied size for sparkle
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (0.8 + Math.random() * 2.2) + 's'; // Faster variation
        starsContainer.appendChild(star);
    }
}

generateTwinkleStars();

// ===================== LANTERN CREATION & ANIMATION (SINGLE PER CLICK, LARGER RED STYLE WITH FRINGES) =====================
function createLantern(xPercent) {
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    lantern.style.left = xPercent + '%';
    const scale = 0.8 + Math.random() * 0.4; // Slightly larger scale
    lantern.style.transform = `translateX(-50%) scale(${scale})`;
    lantern.style.bottom = '0';

    // Unique gradient for red lantern
    const gradientId = 'lg' + Date.now() + Math.random();
    lantern.innerHTML = `
        <svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#ff6b35"/>
                    <stop offset="0.5" stop-color="#ff8e53"/>
                    <stop offset="1" stop-color="#c44569"/>
                </linearGradient>
                <linearGradient id="fringeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#ff6b35"/>
                    <stop offset="1" stop-color="#ff4757"/>
                </linearGradient>
            </defs>
            <!-- Top handle -->
            <line x1="50" y1="0" x2="50" y2="10" stroke="#8b4513" stroke-width="4"/>
            <!-- Main body (red paper with stripes) -->
            <rect x="20" y="15" width="60" height="100" rx="10" fill="url(#${gradientId})" stroke="#d63031" stroke-width="2"/>
            <!-- Vertical stripes (bamboo-like) -->
            <line x1="30" y1="15" x2="30" y2="115" stroke="#e17055" stroke-width="1" opacity="0.6"/>
            <line x1="40" y1="15" x2="40" y2="115" stroke="#e17055" stroke-width="1" opacity="0.6"/>
            <line x1="60" y1="15" x2="60" y2="115" stroke="#e17055" stroke-width="1" opacity="0.6"/>
            <line x1="70" y1="15" x2="70" y2="115" stroke="#e17055" stroke-width="1" opacity="0.6"/>
            <!-- Inner glow -->
            <rect x="25" y="20" width="50" height="90" rx="8" fill="url(#ffeb99)" opacity="0.3"/>
            <!-- Bottom rim -->
            <rect x="15" y="115" width="70" height="8" rx="4" fill="#8b4513" stroke="#654321" stroke-width="1"/>
            <!-- Fringes/tassels (multiple strands) -->
            <g fill="url(#fringeGradient)">
                <path d="M25 120 Q28 130 25 140 Q22 130 25 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M30 120 Q33 135 30 145 Q27 135 30 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M35 120 Q38 128 35 138 Q32 128 35 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M45 120 Q48 132 45 142 Q42 132 45 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M50 120 Q53 130 50 140 Q47 130 50 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M55 120 Q58 135 55 145 Q52 135 55 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M65 120 Q68 128 65 138 Q62 128 65 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M70 120 Q73 132 70 142 Q67 132 70 120" stroke="#ff4757" stroke-width="2" fill="none"/>
                <path d="M75 120 Q78 130 75 140 Q72 130 75 120" stroke="#ff4757" stroke-width="2" fill="none"/>
            </g>
            <!-- Tassel flower at bottom -->
            <circle cx="50" cy="150" r="3" fill="#ff6b35"/>
            <ellipse cx="50" cy="152" rx="2" ry="4" fill="#ff4757" transform="rotate(45 50 152)"/>
            <ellipse cx="50" cy="152" rx="2" ry="4" fill="#ff4757" transform="rotate(-45 50 152)"/>
        </svg>
    `;

    // Click to show popup
    lantern.addEventListener('click', (e) => {
        e.stopPropagation();
        showPopup();
    });

    lanternsContainer.appendChild(lantern);

    // Float animation (adjusted for larger size)
    const duration = 12000 + Math.random() *40000;
    const sway = 10 + Math.random() * 20;
    lantern.animate([
        { transform: `translateX(-50%) translateY(0) scale(${scale}) rotate(0deg)`, opacity: 0 },
        { transform: `translateX(calc(-50% + ${sway}px)) translateY(-40vh) scale(${scale * 1.05}) rotate(3deg)`, opacity: 1, offset: 0.25 },
        { transform: `translateX(calc(-50% - ${sway}px)) translateY(-70vh) scale(${scale}) rotate(-3deg)`, opacity: 0.7, offset: 0.6 },
        { transform: `translateX(-50%) translateY(-100vh) scale(${scale}) rotate(0deg)`, opacity: 0 }
    ], {
        duration: duration,
        iterations: 1,
        easing: 'cubic-bezier(0.2, 0.9, 0.2, 1)'
    });

    // Glow flicker (red-themed)
    const glowInterval = setInterval(() => {
        lantern.style.filter = `drop-shadow(0 0 ${5 + Math.random() * 15}px #ff6b35)`;
    }, 200);

    setTimeout(() => {
        clearInterval(glowInterval);
        lantern.remove();
    }, duration + 200);
}

// ===================== POPUP FUNCTIONS (PERSISTENT: ONLY CLOSE ON BUTTON/OVERLAY) =====================
function showPopup() {
    currentWishIndex = Math.floor(Math.random() * wishes.length);
    updatePopup();
    overlay.style.display = 'block';
    popup.style.display = 'block';

    // Animate show (no auto-hide)
    popup.style.transform = 'translate(-50%, -50%) scale(0.4)';
    popup.style.opacity = '0';
    popup.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.05)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 }
    ], { duration: 500, easing: 'ease-out',fill: "forwards" });
}

function updatePopup() {
    popupImg.src = images[currentWishIndex % images.length];
    popupMsg.textContent = wishes[currentWishIndex];
}

function nextWish() {
    currentWishIndex = (currentWishIndex + 1) % wishes.length;
    updatePopup();
    popupMsg.style.animation = 'none';
    setTimeout(() => { popupMsg.style.animation = 'wishGlow 2s infinite alternate'; }, 10);
}

function closePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// Event Listeners (Overlay click closes popup)
nextWishBtn.addEventListener('click', nextWish);
closeWishBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup); // Click screen/overlay to close
releaseBtn.addEventListener('click', () => {
    createLantern(Math.random() * 80 + 10); // Single lantern per click
});

// Screen click (closes popup if open, else release single lantern)
document.body.addEventListener('click', (e) => {
    if (popup.style.display === 'block' && !e.target.closest('.popup')) {
        closePopup(); // Close on screen click if popup open
    } else if (e.target.id !== 'releaseBtn' && !e.target.closest('.popup') && !e.target.closest('.lantern')) {
        createLantern((e.clientX / window.innerWidth) * 100); // Single lantern
    }
});

// ===================== AUTO LANTERN WAVE (SINGLE EVERY 7s) =====================
setInterval(() => {
    createLantern(Math.random() * 80 + 10); // Single auto lantern
}, 7000);

// ===================== RABBIT ANIMATION (ENHANCED FOR HIGH-DETAIL RABBIT WITH SPARKLES) =====================
const rabbit = document.querySelector('.rabbit');
if (rabbit) {
    function rabbitLoop() {
        const hopHeight = 15 + Math.random() * 10; // Higher for larger rabbit
        rabbit.animate([
            { transform: 'translateY(0)', filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' },
            { transform: `translateY(-${hopHeight}px)`, filter: 'drop-shadow(0 0 16px rgba(255, 229, 240, 0.8))' },
            { transform: 'translateY(0)', filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' }
        ], { duration: 2000 + Math.random() * 1000, iterations: 1, easing: 'ease-in-out' });
        setTimeout(rabbitLoop, 2500);
    }
    rabbitLoop();

    // Enhanced animations for details (ears, bow, whiskers, eyes, mouth, sparkles)
    setInterval(() => {
        // Ear wiggles
        document.querySelector('.ear-left').style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        document.querySelector('.ear-right').style.transform = `rotate(${Math.random() * -10 + 5}deg)`;
        // Bow swing and scale
        document.querySelector('.bow').style.transform = `rotate(${Math.random() * 12 - 6}deg) scale(1.05)`;
        // Whiskers twitch (stroke width variation)
        document.querySelectorAll('.whisker').forEach(whisker => {
            whisker.style.strokeWidth = (2 + Math.random() * 1 - 0.5) + 'px';
        });
        // Eyes blink and sparkle (scale + highlight pulse)
        document.querySelector('.eye-left').style.transform = `scaleY(${0.7 + Math.random() * 0.6})`;
        document.querySelector('.eye-right').style.transform = `scaleY(${0.7 + Math.random() * 0.6})`;
        document.querySelectorAll('.eye-sparkle').forEach(sparkle => {
            sparkle.style.opacity = 0.8 + Math.random() * 0.2;
            sparkle.style.transform = `scale(${0.8 + Math.random() * 0.4})`;
        });
        // Mouth wiggle (path d variation)
        const mouth = document.querySelector('path[d^="M90 165 Q100 170 110 165"]');
        if (mouth) {
            mouth.style.d = `M${90 + Math.random() * 4 - 2} 165 Q${100 + Math.random() * 2 - 1} ${170 + Math.random() * 2 - 1} ${110 + Math.random() * 4 - 2} 165`;
        }
        // Mooncake bounce
        const mooncake = document.querySelector('circle[fill="#d4a017"]');
        if (mooncake) {
            mooncake.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.1)' }], { duration: 500, iterations: 1 });
        }
        // Rabbit sparkles pulse
        document.querySelectorAll('.rabbit-sparkle, .sparkle-dot').forEach(dot => {
            dot.style.opacity = Math.random() * 0.5 + 0.5;
            dot.style.transform = `scale(${0.5 + Math.random() * 1})`;
        });
    }, 1500); // Faster for liveliness

    // Tail wag
    setInterval(() => {
        const tail = document.querySelector('circle[r="10"]');
        if (tail) {
            tail.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        }
    }, 2000);
}

// ===================== GALAXY & CLOUD ENHANCEMENTS =====================
function galaxySparkle() {
    document.querySelectorAll('.galaxy-layer span').forEach(span => {
        const scale = 0.8 + Math.random() * 1.4;
        span.animate([
            { transform: 'scale(1)', opacity: span.style.opacity || 0.5 },
            { transform: `scale(${scale})`, opacity: 1 },
            { transform: 'scale(1)', opacity: span.style.opacity || 0.5 }
        ], { duration: 800 + Math.random() * 800, iterations: Infinity }); // Faster sparkle
    });
}
galaxySparkle();


// ===================== MOON PARTICLE SPARKLES =====================
function moonParticles() {
    setInterval(() => {
        const moon = document.querySelector('.moon');
        if (!moon) return;
        const rect = moon.getBoundingClientRect();
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255,255,200,0.9)'; // Brighter
        particle.style.borderRadius = '50%';
        particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        particle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '5';
        document.body.appendChild(particle);

        const dx = (Math.random() - 0.5) * 50;
        const dy = Math.random() * 50;
        particle.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
        ], { duration: 1500 + Math.random() * 1000, easing: 'ease-out' });

        setTimeout(() => particle.remove(), 2500);
    }, 800);
}
moonParticles();

// ===================== CLICK SPARKLES =====================
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'radial-gradient(circle, #fff6b3, #ffaa00)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '10';
    document.body.appendChild(sparkle);

    const angle = Math.random() * 2 * Math.PI;
    const dist = 20 + Math.random() * 30;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    sparkle.animate([
        { transform: 'scale(0.5)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 0 }
    ], { duration: 800 + Math.random() * 400, easing: 'ease-out' });

    setTimeout(() => sparkle.remove(), 1200);
}

// Add sparkles on click (if not popup/lantern)
document.body.addEventListener('click', (e) => {
    if (e.target.id !== 'releaseBtn' && !e.target.closest('.popup') && !e.target.closest('.lantern')) {
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createSparkle(e.clientX, e.clientY), i * 50);
        }
    }
});

// ===================== INITIALIZATION =====================
window.addEventListener('load', () => {
    console.log('Trung Thu Page Loaded - Ready to sparkle! ✨');
    // TODO: Add init for music toggle or more layers
});

// ================== TẠO THÊM NHIỀU SAO RANDOM ==================
const starsContainer = document.querySelector('.stars-container');
for (let i = 0; i < 200; i++) { // số lượng sao
  let star = document.createElement('div');
  star.className = 'twinkle-star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.opacity = Math.random();
  star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`;
  starsContainer.appendChild(star);
}

// ==================== SAO BĂNG BAY CHÉO DÀY ĐẶC ====================
function createShootingStar() {
    const star = document.createElement("div");
    star.className = "shooting-star";

    // vị trí bắt đầu: từ trên bầu trời (cao 0–200px)
    const startX = Math.random() * (window.innerWidth * 0.3);
    const startY = -50;

    // vị trí kết thúc: bay chéo xuống dưới (trái hoặc phải)
    const endX = 400 + Math.random() * 300;  // lệch nhiều sang phải
    const endY = 800 + Math.random() * 200; 

    // đặt vị trí ban đầu
    star.style.left = startX + "px";
    star.style.top = startY + "px";

    document.body.appendChild(star);

    // animation bay chéo
    star.animate(
        [
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
            
        ],
        {
            duration: 3000 + Math.random() * 2000, // 2–4 giây
            easing: "linear",
            iterations: 1
        }
    ).onfinish = () => star.remove();

    // thêm đuôi sao băng (vệt sáng)
    const tail = document.createElement("div");
    tail.style.position = "fixed";
    tail.style.left = startX + "px";
    tail.style.top = startY + "px";
    tail.style.width = "100px";
    tail.style.height = "2px";
    tail.style.background = "linear-gradient(90deg, white, transparent)";
    tail.style.opacity = "0.7";
    tail.style.transform = "rotate(-70deg)";
    document.body.appendChild(tail);

    tail.animate(
        [
            { transform: `translate(0,0) rotate(45deg)`, opacity: 0.7 },
            { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(45deg)`, opacity: 0 }
        ],
        { duration: 1000 + Math.random() * 1000, easing: "linear", iterations: 1 }
    ).onfinish = () => tail.remove();
}

// gọi sao băng liên tục, dày đặc hơn (mỗi 800ms có 1 cái)
setInterval(() => {
    createShootingStar();
    createShootingStar();
    createShootingStar();
    createShootingStar();
    createShootingStar();
    createShootingStar();
    createShootingStar();
    createShootingStar();
    createShootingStar();
}, 500);
