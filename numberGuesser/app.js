// game values
let min = 1, max = 10, winningNumber = 2, guessesLeft = 3;

// UI variables
const game = document.getElementById('game'),
    minNumber = document.querySelector('.nim-num'),
    maxNumber = document.querySelector('.max-num'),
    guessButton = document.getElementById('guess-btn'),
    guessInput = document.getElementById('guess-input'),
    message = document.querySelector('.message');

// assign UI min and max
minNumber.textContent = min;
maxNumber.textContent = max;

// listener for guess button
guessButton.addEventListener('click', function () {
   let guessNumberInput = parseInt(guessInput.value);

   //validate
   if(isNaN(guessNumberInput) || guessNumberInput < min || guessNumberInput > max) {
       setMessage(`Please put a number between a ${min} and ${max}.`, 'red');
   }

   // check if the input number is the winning number
   if(guessNumberInput === parseInt(winningNumber)) {
        // disable input
        guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = 'green';
        // set message
        setMessage(`${winningNumber} is correct, YOU WIN!`, 'green');
   } else {

   }
});

// setMessage function
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}





















