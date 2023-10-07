const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    // Add more questions here
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach(choice => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", checkAnswer);
        choicesElement.appendChild(li);
    });
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    resultElement.textContent = `You scored ${score} out of ${questions.length} questions!`;
    submitButton.style.display = "none";
}

displayQuestion();

submitButton.addEventListener("click", () => {
    checkAnswer();
});
