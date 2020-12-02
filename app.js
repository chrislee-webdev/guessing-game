
//Get Elememts from HTML and Create MISSED Variable

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('.btn__reset');

let missed = 0;

//Attach EventListener to START GAME Button to Hide Start Screen Overlay

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Create PHRASES ARRAY

const phrases = [
    "showing off is the fools idea of glory",
    "as you think so shall you become",
    "the key to immortality is first living a life worth remembering",
    "Do not pray for an easy life pray for the strength to endure a difficult one",
    "knowing is not enough we must apply willing is not enough we must do"
];

//Create a getRandomPhraseAsArray function

let getRandomPhraseAsArray = phrases[Math.floor(Math.random() * phrases.length)];

//Set Game Display


