$(document).ready(function () {
    const correctAnswer = "Paris";
    let answered = false;

    $(".option").on("click", function () {
        if (answered) return;

        answered = true;
        $(this).css("background-color", "#85f00e"); // Correct color

        if ($(this).text() === correctAnswer) {
            $(".feedback").text("Correct! Paris is the capital of France.");
        } else {
            $(".feedback").text("Incorrect. The correct answer is Paris.");
            $(".option:contains('" + correctAnswer + "')").css("background-color", "#85f00e"); // Highlight correct answer
        }

        $(".option").off("click"); // Disable other options
    });
});



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
