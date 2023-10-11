$(document).ready(function () {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Mercury"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
            correctAnswer: "Blue Whale"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correctAnswer: "Au"
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: "Carbon Dioxide"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Skin", "Lungs"],
            correctAnswer: "Skin"
        },
        {
            question: "Which country is famous for the ancient pyramids?",
            options: ["Greece", "Egypt", "Italy", "India"],
            correctAnswer: "Egypt"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["Wa", "H2O", "Wo", "Hy"],
            correctAnswer: "H2O"
        },
        {
            question: "How many continents are there on Earth?",
            options: ["3", "5", "6", "7"],
            correctAnswer: "7"
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            correctAnswer: "2"
        }
    ];

    let currentQuestion = 0;
    let answered = false;

    function loadQuestion() {
        const questionData = questions[currentQuestion];
        $(".question").text(`Question ${currentQuestion + 1}: ${questionData.question}`);
        $(".options .option").each(function (index) {
            $(this).text(questionData.options[index]);
            $(this).css("background-color", "");
        });
        $(".feedback").text("");
        answered = false;
    }

    $("#start-button").on("click", function () {
        loadQuestion();
        $("#start-button").hide();
        $("#next-button").show();
    });

    $("#next-button").on("click", function () {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion();
            $(".option").on("click", function () {
                if (answered) return;
                answered = true;
                $(this).css("background-color", "#85f00e");
                const selectedOption = $(this).text();
                const correctAnswer = questions[currentQuestion].correctAnswer;
                if (selectedOption === correctAnswer) {
                    $(".feedback").text("Correct! " + correctAnswer + " is the correct answer.");
                } else {
                    $(".feedback").text("Incorrect. The correct answer is " + correctAnswer + ".");
                    $(".option:contains('" + correctAnswer + "')").css("background-color", "#85f00e");
                }
            });
        } else {
            $(".feedback").text("Quiz completed.");
            $("#next-button").hide();
        }
    });
});
