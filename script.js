const button = document.getElementById('celebrateBtn');
const message = document.getElementById('message');
const quotes = document.getElementById('motivationalQuotes');

const motivationalMessages = [
    "🎉 You're Awesome! 🎉",
    "🌟 Keep Shining Bright! 🌟",
    "🚀 To The Moon! 🚀",
    "💪 You've Got This! 💪",
    "🎯 Perfect Shot! 🎯",
    "⚡ Lightning Speed! ⚡",
    "🏆 Champion! 🏆",
    "✨ Pure Magic! ✨"
];

const motivationalQuotes = [
    "\"The only way to do great work is to love what you do.\" - Steve Jobs",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"Success is not final, failure is not fatal.\" - Winston Churchill",
    "\"Your limitation—it's only your imagination.\"",
    "\"Great things never come from comfort zones.\"",
    "\"Dream it. Wish it. Do it.\"",
    "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt"
];

function getRandomMessage() {
    return motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
}

function getRandomQuote() {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

function triggerConfetti() {
    // Random confetti from different positions
    const count = 200;
    const defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    
    fire(0.2, {
        spread: 60,
    });
    
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    // Confetti from the sides
    setTimeout(() => {
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 100,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 250);
}

button.addEventListener('click', () => {
    // Update message and quote
    message.textContent = getRandomMessage();
    quotes.querySelector('.quote').textContent = getRandomQuote();
    
    // Show elements
    message.classList.remove('hidden');
    quotes.classList.remove('hidden');
    
    // Trigger multiple confetti bursts
    triggerConfetti();
    
    // Add a second burst after a short delay
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 500);

    // Rainbow confetti after 1 second
    setTimeout(() => {
        const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#8b00ff'];
        confetti({
            particleCount: 150,
            spread: 180,
            colors: colors,
            origin: { y: 0.6 }
        });
    }, 1000);
});

// Easter egg: Konami code for mega confetti
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Mega confetti explosion
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                confetti({
                    particleCount: 200,
                    spread: 360,
                    origin: {
                        x: Math.random(),
                        y: Math.random() - 0.2
                    }
                });
            }, i * 200);
        }
        message.textContent = "🎮 KONAMI CODE ACTIVATED! 🎮";
        message.classList.remove('hidden');
    }
});