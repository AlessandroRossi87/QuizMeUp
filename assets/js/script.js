/*** Quiz questions */

const questions = [
    {
        question: "Rosa canina is commonly known by what name?",
        answers: [
            { text: "Dog rose", correct: true },
            { text: "Cat rose", correct: false },
            { text: "Pig rose", correct: false },
            { text: "Elephant rose", correct: false },
        ]
    },
    {
        question: "Rosa 'Harison's Yellow' is also known as the 'Yellow Rose of' where?",
        answers: [
            { text: "Essex", correct: false },
            { text: "Wisconsin", correct: false },
            { text: "Texas", correct: true },
            { text: "Orange County", correct: false },
        ]
    },
    {
        question: "The points on the stem of a rose are not actually true thorns and should be called what?",
        answers: [
            { text: "Tickles", correct: false },
            { text: "Prickles", correct: true },
            { text: "Stickles", correct: false },
            { text: "Freckles", correct: false },
        ]
    },
    {
        question: "What is the name of the fruit that comes from roses?",
        answers: [
            { text: "Legs", correct: false },
            { text: "Hips", correct: true },
            { text: "Ankles", correct: false },
            { text: "Heads", correct: false },
        ]
    },
    {
        question: "'A rose by any other name would smell as sweet' is a popular quote from which William Shakespeare play?",
        answers: [
            { text: "Shakespeare in Love", correct: false },
            { text: "A Midsummer Night's Dream", correct: false },
            { text: "Hamlet", correct: false },
            { text: "Romeo & Juliet", correct: true },
        ]
    },
    {
        question: "A pink blend garden rose, first introduced at the British Embassy in the United States in 1998, was named after who?",
        answers: [
            { text: "Princess Diana", correct: true },
            { text: "Sarah Ferguson", correct: false },
            { text: "Camilla Parker Bowles", correct: false },
            { text: "Meghan Markle", correct: false },
        ]
    },
    {
        question: "Which color roses are a symbol of gratitude and appreciation?",
        answers: [
            { text: "Yellow", correct: false },
            { text: "Red", correct: false },
            { text: "Pink", correct: true },
            { text: "Flame-of-Burnt-Brandy", correct: false },
        ]
    },
    {
        question: "Which confectionary also known as lokum is often flavored with rosewater?",
        answers: [
            { text: "Knafeh", correct: false },
            { text: "Turkish Delight", correct: true },
            { text: "Spotted Dick", correct: false },
            { text: "Baklava", correct: false },
        ]
    },
    {
        question: "How many petals do wild roses or dog roses have?",
        answers: [
            { text: "Five", correct: true },
            { text: "Four", correct: false },
            { text: "Seven", correct: false },
            { text: "Thirteen", correct: false },
        ]
    },
    {
        question: "Which rose is England's national flower?",
        answers: [
            { text: "Pound-Sterling Rose", correct: false },
            { text: "Windsor Rose", correct: false },
            { text: "Brexit Rose", correct: false },
            { text: "Tudor Rose", correct: true },
        ]
    },
    {
        question: "What is the oldest class of Modern garden roses?",
        answers: [
            { text: "Hybrid Juice", correct: false },
            { text: "Hybrid Irish Coffee", correct: false },
            { text: "Hybrid Tea", correct: true },
            { text: "Hybrid Latte Macchiato", correct: false },
        ]
    },
    {
        question: "Known for her music and theme park, which famous singer has an orange red rose variety bearing her name?",
        answers: [
            { text: "Ariana Grande", correct: false },
            { text: "Dolly Parton", correct: true },
            { text: "Taylor Swift", correct: false },
            { text: "Beyonce", correct: false },
        ]
    },
    {
        question: "According to Greek Mythology, who gave the rose its name?",
        answers: [
            { text: "Athena", correct: false },
            { text: "Maria Callas", correct: false },
            { text: "Aphrodite", correct: true },
            { text: "Jacqueline Kennedy Onassis", correct: false },
        ]
    },
    {
        question: "Which American singer had a hit in 1962 with Ramblin Rose?",
        answers: [
            { text: "Nat King Cole", correct: true },
            { text: "Jay-Z", correct: false },
            { text: "Frank Sinatra", correct: false },
            { text: "Dean Martin", correct: false },
        ]
    },
    {
        question: "Kane's last word in the film 'Citizen Kane' was Rosebud. What was Rosebud?",
        answers: [
            { text: "A teddy bear", correct: false },
            { text: "A gerbil", correct: false },
            { text: "A sex toy", correct: false },
            { text: "A sled", correct: true },
        ]
    },
    {
        question: "Where in Jordan was poetically described as 'The rose red city half as old as time'?",
        answers: [
            { text: "Babylon", correct: false },
            { text: "Ammam", correct: false },
            { text: "Barbieland", correct: false },
            { text: "Petra", correct: true },
        ]
    },
    {
        question: "Which royal houses fought the Wars of the Roses?",
        answers: [
            { text: "York and Lancaster", correct: true },
            { text: "Turner and Douglas", correct: false },
            { text: "Orange-Nassau and Stuart", correct: false },
            { text: "Davenport and Hall", correct: false },
        ]
    },
    {
        question: "A famous Rose had a hit in the 50s with Mambo Italiano, who is her nephew?",
        answers: [
            { text: "Danny DeVito", correct: false },
            { text: "Lou Bega", correct: false },
            { text: "George Clooney", correct: true },
            { text: "Richard Gere", correct: false },
        ]
    },
    {
        question: "Which line precedes '...I never promised you a rose garden' in a 1970s hit?",
        answers: [
            { text: "I'm drinking Bourbon...", correct: false },
            { text: "I beg your pardon...", correct: true },
            { text: "Kiss Dolly Parton...", correct: false },
            { text: "I just got hardon...", correct: false },
        ]
    },
];

/*** Defining my variables */

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

/*** Function to start the game */

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

/*** Function to display question and answers */

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

/** Function for selecting answer */

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

/** Function for score */

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
}

/** Function for next button */

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/** Event listener for next button */

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

/** Display output of question */

startQuiz();