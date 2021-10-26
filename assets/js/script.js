const quizContainer = document.getElementById('quiz-container');
const scoresResults = document.getElementById('score-area');
const submitButton = document.getElementById('submit-button');



// Wait for the DOM to completely finish loading
// before running the game
document.addEventListener("DOMContentLoaded", function() {
    //Allow the user to click enter to submit their answer.
    document.getElementById('answer-box').addEventListener('keydown', function(event) {
        if(event.key === 'Enter') {
            checkAnswer();
        }
    });
    runQuiz();
});


/**
 * Main function that runs the game and calls the other
 * functions to display one of the questions
 */
function runQuiz() {
    //Clears input for user each time a new question is loaded.
    document.getElementById('answer-box').value = '';
    //Place the cursor in the answer box automatically.
    document.getElementById('answer-box').focus();

    displaySQLQuestion();
}


function displaySQLQuestion() {

}

function checkAnswer() {

}

function addScore() {

}

function addWrong() {

}