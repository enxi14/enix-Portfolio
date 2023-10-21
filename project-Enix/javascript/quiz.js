$(document).ready(function () {
    const questions = [
        {
            question: "What is the name of the protagonist in 'Naruto'?",
            choices: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno"],
            correct: 0
        },
        {
            question: "Which cartoon character lives in a pineapple under the sea?",
            choices: ["Mickey Mouse", "Bugs Bunny", "SpongeBob SquarePants"],
            correct: 2
        },
    {
            question: "Which anime series features a young alchemist named Edward Elric in his quest to find the Philosopher's Stone?",
            choices: ["Fullmetal Alchemist", "One Piece", "Death Note", "Bleach"],
            correct: 0
        },
        {
            question: "What is the name of the famous Studio Ghibli film about a young girl and her parents who are transformed into pigs?",
            choices: ["Princess Mononoke", "My Neighbor Totoro", "Spirited Away", "Howl's Moving Castle"],
            correct: 2
        },
        {
            question: "Which animated series features a character named Bender who is a bending robot?",
            choices: ["Rick and Morty", "The Simpsons", "Futurama", "South Park"],
            correct: 2
        },
        {
            question: "In 'Avatar: The Last Airbender,' which element can Aang bend?",
            choices: ["Water", "Fire", "Earth", "Air"],
            correct: 3
        },
        {
            question: "What is the name of the young witch and her talking cat in the Studio Ghibli film 'Kiki's Delivery Service'?",
            choices: ["Kiki and Jiji", "Sakura and Totoro", "Chihiro and No-Face", "Sophie and Howl"],
            correct: 0
        },
        {
            question: "Which animated series features a group of babies who have adventures and solve mysteries?",
            choices: ["Rugrats", "The Flintstones", "The Jetsons", "The Smurfs"],
            correct: 0
        },
        {
            question: "What is the name of the animated show featuring a talking sponge who lives in a pineapple under the sea?",
            choices: ["SpongeBob SquarePants", "The Fairly OddParents", "Scooby-Doo", "Tom and Jerry"],
            correct: 0
        },
        {
            question: "Which animated series follows the misadventures of a mad scientist and his grandson?",
            choices: ["The Powerpuff Girls", "Dexter's Laboratory", "Rick and Morty", "Futurama"],
            correct: 2
        },
        {
            question: "In 'My Hero Academia,' what is the protagonist Izuku Midoriya's superhero alias?",
            choices: ["Red Riot", "Deku", "Shoto", "All Might"],
            correct: 1
        },
        {
            question: "In the anime 'One Piece,' what is the name of the main character who aspires to become the Pirate King?",
            choices: ["Luffy", "Naruto", "Ichigo", "Goku"],
            correct: 0
        },
        {
            question: "Which anime is known for its giant humanoid creatures known as Titans?",
            choices: ["Attack on Titan", "Naruto", "Dragon Ball Z", "One Piece"],
            correct: 0
        },
        {
            question: "What is the name of the organization in 'Death Note' that seeks to capture Kira, the serial killer?",
            choices: ["Soul Society", "Akatsuki", "Phantom Troupe", "Task Force"],
            correct: 3
        },
        {
            question: "In 'Dragon Ball Z,' what is the name of Goku's signature attack that he often uses to defeat powerful enemies?",
            choices: ["Kamehameha", "Spirit Bomb", "Final Flash", "Rasengan"],
            correct: 0
        },
        {
            question: "What is the name of the mythical creature that serves as the main mode of transportation in 'My Neighbor Totoro'?",
            choices: ["Neko Bus", "Kiki's Broomstick", "Soot Sprites", "No-Face"],
            correct: 0
        },
        {
            question: "Which anime series features a world where humans and creatures called 'Ghouls' coexist, often in conflict?",
            choices: ["Naruto", "Attack on Titan", "Tokyo Ghoul", "One Punch Man"],
            correct: 2
        },
        {
            question: "In 'Cowboy Bebop,' what is the profession of the main character, Spike Spiegel?",
            choices: ["Bounty Hunter", "Pirate", "Space Detective", "Chef"],
            correct: 0
        },
        {
            question: "What is the name of the magical book that leads to various adventures in 'The Mysterious Cities of Gold'?",
            choices: ["The Book of Prophecies", "The Golden Atlas", "The Solar Calendar", "The Olmec Medallion"],
            correct: 2
        },
        
    ];

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        const questionData = questions[currentQuestion];
        $("#question").text(questionData.question);

        const choicesList = $("#choices");
        choicesList.empty();

        questionData.choices.forEach((choice, index) => {
            const choiceItem = $("<li>").addClass("choice");
            choiceItem.text(choice);
            choiceItem.click(() => checkAnswer(index));
            choicesList.append(choiceItem);
        });
    }

    function checkAnswer(selectedIndex) {
        const questionData = questions[currentQuestion];
        if (selectedIndex === questionData.correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        $("#quiz-container").hide();
        $("#result").text(`Score: ${score} / ${questions.length}`);
        $("#next-button").hide();
    }

    $("#next-button").click(() => {
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    // Start the quiz
    showQuestion();

    $("#home-button").click(() => {
    // Replace 'your_home_page.html' with the URL of your home page
    window.location.href = 'index.html';
});

});
