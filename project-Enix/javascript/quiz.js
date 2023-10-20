$(document).ready(function () {
const questions = [
    {
    question: "In the world of anime, who is known as the 'Pirate King'?",
    options: ["Monkey D. Luffy", "Goku", "Naruto Uzumaki", "Eren Yeager"],
    correctAnswer: "Monkey D. Luffy"
},
{
    question: "Which anime series features a young alchemist named Edward Elric in his quest to find the Philosopher's Stone?",
    options: ["Fullmetal Alchemist", "One Piece", "Death Note", "Bleach"],
    correctAnswer: "Fullmetal Alchemist"
},
{
    question: "What is the name of the famous Studio Ghibli film about a young girl and her parents who are transformed into pigs?",
    options: ["Princess Mononoke", "My Neighbor Totoro", "Spirited Away", "Howl's Moving Castle"],
    correctAnswer: "Spirited Away"
},
{
    question: "Which animated series features a character named Bender who is a bending robot?",
    options: ["Rick and Morty", "The Simpsons", "Futurama", "South Park"],
    correctAnswer: "Futurama"
},
{
    question: "In 'Avatar: The Last Airbender,' which element can Aang bend?",
    options: ["Water", "Fire", "Earth", "Air"],
    correctAnswer: "Air"
},
{
    question: "What is the name of the young witch and her talking cat in the Studio Ghibli film 'Kiki's Delivery Service'?",
    options: ["Kiki and Jiji", "Sakura and Totoro", "Chihiro and No-Face", "Sophie and Howl"],
    correctAnswer: "Kiki and Jiji"
},
{
    question: "Which animated series features a group of babies who have adventures and solve mysteries?",
    options: ["Rugrats", "The Flintstones", "The Jetsons", "The Smurfs"],
    correctAnswer: "Rugrats"
},
{
    question: "What is the name of the animated show featuring a talking sponge who lives in a pineapple under the sea?",
    options: ["SpongeBob SquarePants", "The Fairly OddParents", "Scooby-Doo", "Tom and Jerry"],
    correctAnswer: "SpongeBob SquarePants"
},
{
    question: "Which animated series follows the misadventures of a mad scientist and his grandson?",
    options: ["The Powerpuff Girls", "Dexter's Laboratory", "Rick and Morty", "Futurama"],
    correctAnswer: "Rick and Morty"
},
{
    question: "In 'My Hero Academia,' what is the protagonist Izuku Midoriya's superhero alias?",
    options: ["Red Riot", "Deku", "Shoto", "All Might"],
    correctAnswer: "Deku"
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
            window.location.href = 'index.html';
        }