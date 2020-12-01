
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const startGame = document.querySelector('.btn__reset');

let missed = 0;

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});


