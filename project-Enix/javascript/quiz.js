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
        // Add more questions here
    ];

    let currentQuestion = 0;
    let answered = false;

    function loadQuestion() {
        const questionData = questions[currentQuestion];
        $(".question").text(questionData.question);
        $(".options .option").each(function (index) {
            $(this).text(questionData.options[index]);
            $(this).css("background-color", "");
            $(this).off("click");
            $(this).on("click", function () {
                if (answered) return;

                answered = true;
                $(this).css("background-color", "#85f00e"); // Correct color

                const selectedOption = $(this).text();
                const correctAnswer = questions[currentQuestion].correctAnswer;

                if (selectedOption === correctAnswer) {
                    $(".feedback").text("Correct! " + correctAnswer + " is the correct answer.");
                } else {
                    $(".feedback").text("Incorrect. The correct answer is " + correctAnswer + ".");
                    $(".option:contains('" + correctAnswer + "')").css("background-color", "#f00505"); // Highlight correct answer
                }

                $("#next-button").show();
            });
        });

        answered = false;
    }

    loadQuestion();

    $("#start-button").on("click", function () {
        currentQuestion = 0;
        loadQuestion();
        $("#start-button").hide();
        $("#next-button").hide();
    });

    $("#next-button").on("click", function () {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion();
            $("#next-button").hide();
        } else {
            $(".feedback").text("Quiz completed.");
            $("#next-button").hide();
        }
    });
});
