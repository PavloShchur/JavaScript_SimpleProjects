'use strict';

let questionNumber, score, answerSet, gameSound;

window.onload = function () {

    questionNumber = 0;
    score = 0;

    for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
        let answerIdDiv = 'answer' + i;
        document.getElementById(answerIdDiv).addEventListener('click', answerClicked, false);
    }

    displayQuestion(questionNumber);

};

function answerClicked(event) {

    let answerClicked = event.target.id;
    let answerNumber = answerClicked.charAt(answerClicked.length - 1);

    if(confirm('Are you sure?')){
        if (parseInt(answerNumber) === correctAnswersIndexes[questionNumber]) {
            correctAnswer();
        } else if (parseInt(answerNumber) !== correctAnswersIndexes[questionNumber]) {
            wrongAnswer();
        }
    }

}

function correctAnswer() {

    gameSound = document.getElementById('gameSound');
    gameSound.src = 'audio/Correct-answer-sound-effect.mp3';
    gameSound.play();

    score++;

    document.getElementById('score').innerHTML = '<h1>Score :' + score + '</h1>';

    if (questionNumber < NUMBER_OF_QUESTIONS) {
        questionNumber++;
        displayQuestion(questionNumber);
    } else {
        gameOver();
    }

}

function wrongAnswer() {

    gameSound = document.getElementById('gameSound');
    gameSound.src = 'audio/Wrong-answer-sound-effect.mp3';
    gameSound.play();

    document.getElementById('score').innerHTML = '<h1>Score :' + score + '</h1>';

    if (questionNumber < NUMBER_OF_QUESTIONS) {
        questionNumber++;
        console.time('displayQuestion : start');
        displayQuestion(questionNumber);
        console.timeEnd('displayQuestion : end');
    } else {
        gameOver();
    }

}

function displayQuestion(questionNumber = 0) {

    document.getElementById('question').innerHTML = '<h1>' + questions[questionNumber] + '</h1>';

    answerSet = questionNumberToanswersList.get(questionNumber);

    displayAnswers(answerSet);

}

function gameOver() {

    document.getElementById('question').innerHTML = '<h1>Score :' + score + '</h1><h3>Thanks for playing!</h3>';

    for (let i = 0; i < NUMBER_OF_ANSWERS; i++) {
        let answerIdDiv = 'answer' + i;
        document.getElementById(answerIdDiv).style.display = 'none';
        document.getElementById('score').innerHTML = '';
    }

    if(confirm('Do You want to print the score?')){
        print();
    }

    display_mouseOver();

}

function displayAnswers(answerSet) {

    for (let i = 0; i < NUMBER_OF_QUESTIONS; i++) {
        let answerIdDiv = 'answer' + i;
        document.getElementById(answerIdDiv).innerHTML = answerSet[i];
    }

}


















































































