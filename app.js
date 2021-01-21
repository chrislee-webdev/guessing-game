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

//Create a getRandomPhraseAsArray Function

function getRandomPhraseAsArray(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i].split(''); 
};

console.log(getRandomPhraseAsArray(phrases));
getRandomPhraseAsArray(phrases);

//Create an addPhraseToDisplay Function

function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const li = document.createElement('LI');
        li.textContent = arr[i];
        phrase.appendChild(li);
        if (li.textContent === ' ') {
           li.className = 'space'; 
        } else {
           li.className = 'letter';
        }
    }
};
const answer = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(answer);


