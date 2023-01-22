//Add Needed Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const hearts = document.querySelectorAll('img[src = "images/liveHeart.png');

let missed = 0;

//Create an Array Named Phrases

const phrases = [
    "showing off is the fools idea of glory",
    "as you think so shall you become",
    "willing is not enough we must do ",
    "real living is living for others",
    "be happy but never satisfied"
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
        if (button.textContent === li[i].textContent ) { //create a conditional that compares the text of the button parameter to the text of the li element at the index of the loop
            li[i].classList.add('show'); //if they match, add the 'show' class name to the li
            match = li[i].textContent; //if they match, store the button text in the match variable
        };
    }
    return match;
};

//Add an Event Listener to the Keyboard

qwerty.addEventListener('click', (event) => { //Create an event listener for the qwerty element that listens for the 'click' event

     //Use a conditional to filter out clicks that don't happen on the buttons or if the button already has the 'chosen' class
    if (event.target.tagName === 'BUTTON') {
       event.target.classList.add('chosen'); //Add the 'chosen' class to the button that was pressed
       const correctGuess = checkLetter(event.target);//Call the checkLetter function and assign it to a variable

    //If the checkLetter function does not find a letter, remove one of the heart images and increment the 'missed' counter
    if (correctGuess === null) {
        hearts[missed].src = 'images/lostHeart.png';
        missed += 1;
        }

        event.target.disabled = true;
    }
    checkWin();
});

//Create a checkWin function

function checkWin() {
    const letter = document.getElementsByClassName('letter'); //Create a variable to store the li elements that have the same class name as 'letter'
    const show = document.getElementsByClassName('show'); //Create a variable to store the li elements that have the same class name as 'show'

    let phraseString = answer.join('');//Join the array back in to a string to display

    if (letter.length === show.length) { //Check if the length of the 2 variable are the same. If they are, display the win overlay
        overlay.className = 'win'; //Create the win overlay by adding the 'win' class to the start overlay
        
        overlay.innerHTML = `Congratulations! The phrase was "${phraseString}." Refrech the browser to play again`
        // overlay.innerHTML = '<h1>"The successful warrior is the average person, with laser-like focus"</h1>'; 
        //Change the headline text of the start overlay to show a person won
        overlay.style.display = 'flex'; //Change the display property of the overlay to 'flex'
        
    } else if (missed > 4) { //Check if the misssed counter is greater than 4. If they are, display the lose overlay
        overlay.className = 'lose'; //Create the lose overlay by adding the 'lose' class to the start overlay
        overlay.innerHTML = `Sorry! The phrase was "${phraseString}." Refrech the browser to play again`; //Change the headline text of the start overlay to show a person lost
        overlay.style.display = 'flex'; //Change the display property of the overlay to 'flex'
    }

};
