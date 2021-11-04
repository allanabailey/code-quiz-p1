const quizContainer = document.getElementById('quiz-container');
const scoresResults = document.getElementById('score-area');
const submitButton = document.getElementById('submit-button');

//Audio files to play on getting an answer correct / incorrect.
const correct = new Audio('assets/audio/correct.mp3');
const incorrect = new Audio('assets/audio/incorrect.mp3');

//SQL Question and Answer array
const sqlQuestions = [
    {
      question: "What does the S in SQL stand for?",
      answer: "STRUCTURED"
    },
    {
      question: "What is the keyword used to select unique/different values?",
      answer: "DISTINCT"
    },
    {
      question: "Does ORDER BY default to ASC or DESC when not specified?",
      answer: "ASC"
    },
    {
      question: "What is the wildcard used to select all columns from a table?",
      answer: "*"
    }, 
    {
      question: "What is the keyword used to specify the range of values something can be in?",
      answer: "BETWEEN"
    },  
    {
      question: "True or False: TRUNCATE TABLE deletes the whole table.",
      answer: "FALSE"
    }, 
    {
      question: "What is the keyword used to filter records through meeting a certain condition in a SELECT statement?",
      answer: "WHERE"
    },
    {
      question: "What is the keyword used to search for a particular pattern in a WHERE clause?",
      answer: "LIKE"
    },
    {
      question: "What key word must go at the end of a CASE statement?",
      answer: "END"
    },
    {
      question: "True or False: DROP TABLE only deletes the data in the table, not the table itself.",
      answer: "FALSE"
    }
];


// Wait for the DOM to completely finish loading
// before running the game
document.addEventListener('DOMContentLoaded', function() {
    //Allow the user to click enter to submit their answer.
    document.getElementById('answer-box').addEventListener('keydown', function(event) {
        if(event.key === 'Enter') {
            checkAnswer();
        }
    });
    submitButton.addEventListener('click', checkAnswer);
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

    //Randomly choose a question from the array
    let qNumber = Math.floor(Math.random() * sqlQuestions.length);

    //Check if the user has completed the quiz and display a congratulations message
    //and clear the quiz area if so.
    if(sqlQuestions.length === 0) {
        let finishMsg = document.getElementById('question');
        finishMsg.textContent = "Quiz complete! Refresh the page to try again!";
        document.getElementById('answer-message').style.display = 'none';
        document.getElementById('answer-box').style.display = 'none';
        document.getElementById('submit-button').style.display = 'none';
    } else {
        let qDiv = document.getElementById('qNumber');
        qDiv.textContent = sqlQuestions[qNumber].answer;
        console.log(sqlQuestions);
        displaySQLQuestion(qNumber);
        sqlQuestions.splice(qNumber, 1);
    }
}


/**
 * Function that displays the next SQL question in the quiz area
 * by taking qNumber as a parameter and displaying the question
 * in that index of the array.
 * @param {*} qNumber 
 */
function displaySQLQuestion(qNumber) {
    let q = document.getElementById('question');
    q.innerHTML = sqlQuestions[qNumber].question;
}


/**
 * Function that checks the user's inputted answer against the correct answer
 * stored in the array ignoring case and leading/trailing white spaces.
 */
function checkAnswer() {

    //Ignore any leading/trailing white spaces and the case of the user's input.
    let userAnswer = document.getElementById('answer-box').value.trim().toUpperCase();
    let correctAnswer = document.getElementById('qNumber').innerHTML;
    if(userAnswer === correctAnswer) {
        correct.play();
        addScore();
    } else {
        incorrect.play();
        addWrong();
    }
    runQuiz();
}


/**
 * Function to increment the users score on getting an answer correct.
 */
function addScore() {
    let currentScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++currentScore;

    //If the user has answered 10 questions correctly, turn the background color to green
    //and display a congratulations message in an alert box.
    if(currentScore == 10) {
        alert('Congratulations you have reached 10 points!');
        quizContainer.style.backgroundColor = 'green';
    }
}


/**
 * Function to increment the 'incorrect' score if the user gets an answer wrong.
 */
function addWrong() {
    let currentWrong = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++currentWrong;
}