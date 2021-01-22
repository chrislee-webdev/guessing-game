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
        const ul = document.querySelector('ul');
        li.textContent = arr[i];
        ul.appendChild(li);

        if (li.textContent === ' ') {
           li.className = 'space'; 
        } else {
           li.className = 'letter';
        }
    }
};
const answer = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(answer);

//Create a Check Letter Function

function checkLetter(button) { //create a function stub and include a parameter for the button that gets clicked
    const li = document.querySelectorAll('li'); //store all the of the li elements inside checkLetter
    let match = null; //create a variable to store if a match is found and give it the value of null

    for (let i = 0; i < li.length; i += 1) { //loop through all of the li elements
        if (button === li[i].textContent ) { //create a conditional that compares the text of the button parameter to the text of   the li element at the index of the loop
            li.classList.add = 'show'; //if they match, add the 'show' class name to the li
            match === li[i].textContent; //if they match, store the button text in the match variable
            return match;
        };
    }
};