//Add Needed Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');

let missed = 0;

//Create an Array Named Phrases

const phrases = [
    "showing off is the fools idea of glory",
    "as you think so shall you become",
    "the key to immortality is first living a life worth remembering",
    "Do not pray for an easy life pray for the strength to endure a difficult one",
    "knowing is not enough we must apply willing is not enough we must do"
];

//Attach an Event Listener to the 'Start Game' button to hide the start screen overlay

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Create a getRandomPhrasesAsArray Function

function getRandomPhrasesAsArray(phrases) {
    phrases[Math.floor(Math.random() * phrases.length)];
};



