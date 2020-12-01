
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getelementById('overlay');
const startGame = document.getElementsById('btn__reset');

let missed = 0;

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});


