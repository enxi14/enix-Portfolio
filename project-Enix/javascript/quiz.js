$(document).ready(function () {
    const questions = []
    }
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
    },
{
    question: "In the anime 'One Piece,' what is the name of the main character who aspires to become the Pirate King?",
    options: ["Luffy", "Naruto", "Ichigo", "Goku"],
    correctAnswer: "Luffy"
},
{
    question: "Which anime is known for its giant humanoid creatures known as Titans?",
    options: ["Attack on Titan", "Naruto", "Dragon Ball Z", "One Piece"],
    correctAnswer: "Attack on Titan"
},
{
    question: "What is the name of the organization in 'Death Note' that seeks to capture Kira, the serial killer?",
    options: ["Soul Society", "Akatsuki", "Phantom Troupe", "Task Force"],
    correctAnswer: "Task Force"
},
{
    question: "Which anime series features a young alchemist named Edward Elric and his brother Alphonse on a quest to find the Philosopher's Stone?",
    options: ["Naruto", "One Piece", "Fullmetal Alchemist", "Bleach"],
    correctAnswer: "Fullmetal Alchemist"
},
{
    question: "In 'Dragon Ball Z,' what is the name of Goku's signature attack that he often uses to defeat powerful enemies?",
    options: ["Kamehameha", "Spirit Bomb", "Final Flash", "Rasengan"],
    correctAnswer: "Kamehameha"
},
{
    question: "What is the name of the mythical creature that serves as the main mode of transportation in 'My Neighbor Totoro'?",
    options: ["Neko Bus", "Kiki's Broomstick", "Soot Sprites", "No-Face"],
    correctAnswer: "Neko Bus"
},
{
    question: "Which anime series features a world where humans and creatures called 'Ghouls' coexist, often in conflict?",
    options: ["Naruto", "Attack on Titan", "Tokyo Ghoul", "One Punch Man"],
    correctAnswer: "Tokyo Ghoul"
},
{
    question: "In 'Cowboy Bebop,' what is the profession of the main character, Spike Spiegel?",
    options: ["Bounty Hunter", "Pirate", "Space Detective", "Chef"],
    correctAnswer: "Bounty Hunter"
},
{
    question: "What is the name of the magical book that leads to various adventures in 'The Mysterious Cities of Gold'?",
    options: ["The Book of Prophecies", "The Golden Atlas", "The Solar Calendar", "The Olmec Medallion"],
    correctAnswer: "The Solar Calendar"
},
{
    question: "Which anime series is set in a world where humanity is on the brink of extinction due to the Titans, gigantic humanoid creatures?",
    options: ["Attack on Titan", "Death Note", "Naruto", "One Piece"],
    correctAnswer: "Attack on Titan"
}



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
        $("#reset-button").show();
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

    // Function to reset the quiz
    function resetQuiz() {
        $(".feedback").empty();
        $(".option").css("background-color", "#e0e0e0");
        $(".option").on("click", handleAnswerClick);
        $("#reset-button").hide();
        $("#next-button").hide();
        answered = false;
    }

    // Click event for the reset button
    $("#reset-button").on("click", function () {
        resetQuiz();
    });

    function goToHomePage() {
        // Replace 'your_home_page.html' with the URL of your home page
        window.location.href = 'index.html';
}
    {
});