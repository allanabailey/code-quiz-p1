const quizContainer = document.getElementById('quiz-container');
const scoresResults = document.getElementById('score-area');
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener("click", checkAnswer());

const sqlQuestions = new Array (
    "What does the S in SQL stand for?",
    "What is the keyword used to select unique/different values?",
    "Does ORDER BY default to ASC or DESC when not specified?",
    "What is the wildcard used to select all columns from a table?",
    "What is the keyword used to specify the range of values something can be in?",
    "True or False: TRUNCATE TABLE deletes the whole table.",
    "What is the keyword used to filter records through meeting a certain condition in a SELECT statement?",
    "What is the keyword used to search for a particular patter in a WHERE clause?",
    "What key word must go at the end of a CASE statement?",
    "True or False: DROP TABLE only deletes the data in the table, not the table itself."
);

const sqlAnswers = new Array (
    "STRUCTURED",
    "DISTINCT",
    "ASC",
    "*",
    "BETWEEN",
    "FALSE",
    "WHERE",
    "LIKE",
    "END",
    "FALSE"
);


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
    let q = document.getElementById('question');
    let qNumber = Math.floor(Math.random() * 10);
    q.textContent = sqlQuestions[qNumber];
}

function checkAnswer(qNumber) {
    let userAnswer = document.getElementById('answer-box').value.trim().toUppercase();
    let correctAnswer = sqlAnswers[qNumber].value;
    if(userAnswer === correctAnswer) {
        alert("yay!");
    } else {
        alert("NO!");
    }
}

function addScore() {

}

function addWrong() {

}