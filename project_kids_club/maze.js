const reset = document.getElementById('resetButtonM'); // Get the reset button
const player = document.getElementById('player');
const goal = document.getElementById('goal');
const walls = document.querySelectorAll('.wall');
const status = document.getElementById('status');

let playerX = 10;
let playerY = 10;

const maze = document.getElementById('maze-container'); // Get the maze container
const mazeRect = maze.getBoundingClientRect(); // Get the maze's bounding rectangle

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'z': // Up
            playerY -= 10;
            break;
        case 's': // Down
            playerY += 10;
            break;
        case 'q': // Left
            playerX -= 10;
            break;
        case 'd': // Right
            playerX += 10;
            break;
    }
    movePlayer(); // Move the player on the screen
});

function movePlayer() {
    // Ensure the player stays within the bounds of the maze
    playerX = Math.max(0, Math.min(playerX, mazeRect.width - player.offsetWidth)); // Prevent leaving left or right
    playerY = Math.max(0, Math.min(playerY, mazeRect.height - player.offsetHeight)); // Prevent leaving top or bottom

    player.style.top = `${playerY}px`;
    player.style.left = `${playerX}px`;

    // Check for collisions with walls
    for (const wall of walls) {
        const wallRect = wall.getBoundingClientRect();
        const playerRect = player.getBoundingClientRect();

        if (
            playerRect.left < wallRect.right &&
            playerRect.right > wallRect.left &&
            playerRect.top < wallRect.bottom &&
            playerRect.bottom > wallRect.top
        ) {
            status.textContent = 'You hit a wall! Try again.';
            randomizeStatusPosition();
            resetPlayer(); // Reset player if they hit a wall
            return;
        }
    }

    const goalRect = goal.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    // Check if the player reaches the goal
    if (
        playerRect.left < goalRect.right &&
        playerRect.right > goalRect.left &&
        playerRect.top < goalRect.bottom &&
        playerRect.bottom > goalRect.top
    ) {
        status.textContent = 'Congratulations! You won!';
        randomizeStatusPosition();
        resetPlayer(); // Reset player after reaching the goal
    } else {
        status.textContent = '';
    }
}

function resetPlayer() {
    playerX = 10;
    playerY = 10;
    player.style.top = `${playerY}px`;
    player.style.left = `${playerX}px`;
}

// Randomize the status text position
function randomizeStatusPosition() {
    const randomX = Math.random() * (mazeRect.width - 150); // Avoid going off-screen
    const randomY = Math.random() * (mazeRect.height - 50); // Avoid going off-screen

    status.style.left = `${randomX}px`;
    status.style.top = `${randomY}px`;
    status.style.position = 'absolute'; // Ensure it moves correctly
    status.style.display = 'block'; // Ensure it is visible
    status.style.color = getRandomColor(); // Randomize color
    status.style.fontSize = '18px'; // Optional size
    status.style.fontWeight = 'bold'; // Optional font weight
}

// Function to get random color for status
function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Event listener for the reset button
reset.addEventListener('click', () => {
    resetPlayer(); // Reset player position
    status.textContent = ''; // Clear status text
    status.style.display = 'none'; // Hide status text
});
