$(document).ready(function () {
const questions = [
    {
        question: "What anime features a ninja named Naruto Uzumaki?",
        options: ["Bleach", "One Piece", "Naruto", "Dragon Ball"],
        correctAnswer: "Naruto"
    },
    {
        question: "In which anime series does a group of kids enter the Digital World?",
        options: ["Pokémon", "Yu-Gi-Oh!", "Digimon", "Sailor Moon"],
        correctAnswer: "Digimon"
    },
    {
        question: "What is the name of the main character in 'Attack on Titan'?",
        options: ["Eren Yeager", "Goku", "Monkey D. Luffy", "Ichigo Kurosaki"],
        correctAnswer: "Eren Yeager"
    },
    {
        question: "Which anime is known for its 'Sharingan' and 'Rasengan' techniques?",
        options: ["One Punch Man", "Naruto", "Attack on Titan", "Dragon Ball Z"],
        correctAnswer: "Naruto"
    },
    {
        question: "What popular anime is set in the 'Soul Society' and features Shinigami (soul reapers)?",
        options: ["Naruto", "Bleach", "One Piece", "Death Note"],
        correctAnswer: "Bleach"
    },
    {
        question: "In which American animated series do the characters live in a fictional underwater city called Bikini Bottom?",
        options: ["The Simpsons", "South Park", "SpongeBob SquarePants", "Family Guy"],
        correctAnswer: "SpongeBob SquarePants"
    },
    {
        question: "What animated series follows the adventures of a boy and his magical dog in a post-apocalyptic world?",
        options: ["Adventure Time", "Regular Show", "Futurama", "American Dad!"],
        correctAnswer: "Adventure Time"
    },
    {
        question: "What is the name of the animated series in which a boy discovers a portal to other dimensions and has a portal gun?",
        options: ["The Fairly OddParents", "Rick and Morty", "The Powerpuff Girls", "Dexter's Laboratory"],
        correctAnswer: "Rick and Morty"
    },
    {
        question: "In which animated show do four boys often get into bizarre and surreal adventures?",
        options: ["Rick and Morty", "Futurama", "South Park", "The Simpsons"],
        correctAnswer: "South Park"
    },
    {
        question: "Which animated series features the Griffins, a dysfunctional family living in the fictional town of Quahog, Rhode Island?",
        options: ["The Simpsons", "American Dad!", "South Park", "Family Guy"],
        correctAnswer: "Family Guy"
    }
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
                $(this).css("background-color", "#0884c7"); // Correct color

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


function goToHomePage() {
            // Replace 'your_home_page.html' with the URL of your home page
            window.location.href = 'enxi14/enix13/index.html';
        }