import { cards } from './cards.js';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Home_Page_Search_Bar');
    const searchString = document.getElementById('search_input');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const StringValue = searchString.value.trim().toLowerCase();
        const url = `Search_Display.html?search=${encodeURIComponent(StringValue)}`;
        window.location.href = url;
    });

    // Function to animate floating cards
    const floatingCards = document.querySelectorAll('.Floating_Card');

    // Select random cards
    const randomCards = selectRandomCards(cards, floatingCards.length);

    // Update floating cards with random images and add click event listeners
    floatingCards.forEach((cardElement, index) => {
        const card = randomCards[index];
        const imagePath = 'cardimages/' + card.imgSrc;
        const cardName = card.name;
        
        // Add 'horizontal' class if the card has the horizontal property set to true
        if (card.horizontal) {
            cardElement.classList.add('horizontal');
        }

        cardElement.querySelector('img').src = imagePath;

        cardElement.addEventListener('click', function() {
            const url = `Card_Display.html?card=${encodeURIComponent(cardName)}`;
            window.location.href = url;
        });
    });

    function animateFloatingCard(card) {
        const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
        const delay = Math.random() * 2; // Random delay between 0s and 2s

        card.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
    }

    floatingCards.forEach(card => {
        animateFloatingCard(card);
    });
});

function selectRandomCards(cards, numberOfCards) {
    const shuffled = cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfCards);
}

document.addEventListener('DOMContentLoaded', function () {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 50; // Adjust this number for more or fewer snowflakes

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Randomize initial position and size
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall speed
        snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`; // Random opacity
        snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 5}px`; // Random size

        snowContainer.appendChild(snowflake);

        // Remove snowflake after animation to avoid memory leaks
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Continuously generate snowflakes
    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`;
        snowflake.style.width = snowflake.style.height = `${Math.random() * 5 + 5}px`;

        snowContainer.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }, 300); // Adjust the interval for the frequency of new snowflakes

});

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.1; // Set the volume very low

    // Function to play audio and remove event listeners
    function playAudio() {
        audio.play()
            .then(() => {
                console.log('Audio is playing');
                // Remove event listeners after audio starts playing
                document.removeEventListener('click', playAudio);
                document.removeEventListener('scroll', playAudio);
            })
            .catch(error => {
                console.error('Audio playback failed:', error);
            });
    }

    // Attach listeners for click and scroll
    document.addEventListener('click', playAudio, { once: true });
    document.addEventListener('scroll', playAudio, { once: true });
});


