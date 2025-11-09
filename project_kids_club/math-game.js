document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById("question-container4");
    const optionsContainer = document.getElementById("options4");
    const Button = document.getElementById("resetButtonMt");
    const statusDiv = document.getElementById("status4");
    let currentAnswer;

    // Function to generate a new math question
    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        currentAnswer = num1 + num2;

        questionContainer.textContent = `Combien font ${num1} + ${num2}?`;
        generateOptions(currentAnswer);
        updateStatus(""); // Clear status on a new question
    }

    // Function to generate answer options
    function generateOptions(correctAnswer) {
        optionsContainer.innerHTML = ""; // Clear previous options

        const answers = new Set();
        answers.add(correctAnswer);

        while (answers.size < 4) {
            const wrongAnswer = correctAnswer + (Math.floor(Math.random() * 10) - 5);
            if (wrongAnswer > 0) {
                answers.add(wrongAnswer);
            }
        }

        // Shuffle answers and create buttons
        Array.from(answers)
            .sort(() => Math.random() - 0.5)
            .forEach((answer) => {
                const button = document.createElement("button");
                button.textContent = answer;
                button.style.margin = "10px";
                button.style.padding = "10px 20px";
                button.addEventListener("click", () => checkAnswer(answer));
                optionsContainer.appendChild(button);
            });
    }

    // Function to check the selected answer
    function checkAnswer(selectedAnswer) {
        if (selectedAnswer === currentAnswer) {
            updateStatus("Correct!", "green");
            setTimeout(() => {
                generateQuestion(); // Load new question if correct
            }, 1000);
        } else {
            updateStatus("Faux!", "red");
            setTimeout(() => {
                updateStatus(""); // Load new question if correct
            }, 1500);
        }
    }

    // Function to update the status
    function updateStatus(message, color = "black") {
        statusDiv.textContent = message;
        statusDiv.style.color = color;
        statusDiv.style.fontSize = "20px";
    }

    // Reset button functionality
    Button.addEventListener("click", () => {
        generateQuestion();
        updateStatus(""); // Clear status on reset
    });

    // Initialize the first question
    generateQuestion();
});
