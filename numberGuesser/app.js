// game values
let min = 1, max = 10, winningNumber = getRandomNumber(min, max),
    guessesLeft = 3;

// UI variables
const gameWrapper = document.getElementById('game'),
    minNumber = document.querySelector('.nim-num'),
    maxNumber = document.querySelector('.max-num'),
    guessButton = document.getElementById('guess-btn'),
    guessInput = document.getElementById('guess-input'),
    message = document.querySelector('.message');

// assign UI min and max
minNumber.textContent = min;
maxNumber.textContent = max;

// play again event listener
gameWrapper.addEventListener('mousedown', function (event) {
   if(event.target.className === 'play-again') {
       window.location.reload();
   }
});

// listener for guess button
guessButton.addEventListener('click', function () {
   let guessNumberInput = parseInt(guessInput.value);

   //validate
   if(isNaN(guessNumberInput) || guessNumberInput < min || guessNumberInput > max) {
       setMessage(`Please put a number between a ${min} and ${max}.`, 'red');
   }

   // check if the input number is the winning number
   if(guessNumberInput === parseInt(winningNumber)) {
        // game over - won
        gameOver(true, `${winningNumber} is correct, YOU WIN!`)
   } else {
        // wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
        // game over - lost
        gameOver(false, `Game over, you lost. Correct number was ${winningNumber}.`);
        } else {
        // game continues - answer wrong

        // change border color
        guessInput.style.borderColor = 'green';

        // clear input
        guessInput.value = '';

        // tell user the answer is wrong
        setMessage(`${guessNumberInput} is not correct, ${guessesLeft} guesses left.`, 'red')
        }
   }
});

// game over function
function gameOver(won, msg) {
    let color = (won === true) ? 'green' : 'red';
    // disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set message
    setMessage(msg, color);

    // play again
    guessButton.value = 'Play Again';
    guessButton.className += 'play-again';
}

// get winning number
function getRandomNumber(min, max) {
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

// setMessage function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}





















