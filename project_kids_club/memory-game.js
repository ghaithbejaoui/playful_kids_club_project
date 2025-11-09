const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Flip to the front side initially for 2 seconds
function revealCardsInitially() {
    setTimeout(() => {
        cards.forEach(card => card.classList.add('flip')); // Show the front
    }, 200);

    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flip')); // Flip to back
    }, 2200); // 2 seconds of showing the front
}

// Flip the card when clicked
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // First click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

// Check if the cards match
function checkForMatch() {
    const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

// Disable cards if they match
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Unflip cards if they don't match
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

// Reset board state
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Shuffle the cards
function shuffle() {
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

// Reset Game Functionality
function resetGame() {
    // Shuffle the cards again after reset
    shuffle();

    // Remove any flipped states and re-enable the cards
    cards.forEach(card => {
        card.classList.remove('flip'); // Remove flip class
        card.addEventListener('click', flipCard); // Re-enable click events
    });

    // Reset the board's state
    resetBoard();

    // Show all images for 2 seconds
    setTimeout(() => {
        cards.forEach(card => card.classList.add('flip')); // Show the front
    }, 200);

    setTimeout(() => {
        cards.forEach(card => card.classList.remove('flip')); // Flip to back
    }, 2200); // 2 seconds of showing the front
}

// Add event listeners to cards for flipping
cards.forEach(card => card.addEventListener('click', flipCard));

// Reveal cards initially
revealCardsInitially();

// Reset Button Event Listener
const resetButton = document.getElementById('resetButton');
if (resetButton) {
    resetButton.addEventListener('click', resetGame);
}
