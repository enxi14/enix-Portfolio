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
    {
        question: "Which gas do plants absorb from the atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        choices: ["Iron", "Gold", "Silver", "Copper"],
        correctAnswer: "Iron"
    },
    // Add more questions here
];


const questionElement = $("#question");
    const choicesElement = $("#choices");
    const submitButton = $("#submit");
    const resultElement = $("#result");

    let currentQuestion = 0;
    let score = 0;

    function displayQuestion() {
        questionElement.text(questions[currentQuestion].question);
        choicesElement.empty();

        questions[currentQuestion].choices.forEach(choice => {
            const li = $("<li>").text(choice);
            li.on("click", checkAnswer);
            choicesElement.append(li);
        });
    }

    function checkAnswer() {
        const selectedAnswer = $(this).text();
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
        questionElement.text("");
        choicesElement.empty();
        resultElement.text(`You scored ${score} out of ${questions.length} questions!`);
        submitButton.hide();
    }

    displayQuestion();

    submitButton.on("click", () => {
        checkAnswer();
    });
