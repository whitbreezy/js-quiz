//set up array of objects for questions and answers

var questions = [
    {   
        question: "Which of the following is not a data type in JavaScript?",
        answers: 
            ["Boolean",
            "String", 
            "Number",
            "Paragraph"
            ],
        correctAnswer: "Paragraph"
    },
    {   
        question: "What does the keyword 'this' refer to in JavaScript?",
        answers: 
            ["The object containing the keyword 'this'",
            "The child element of the keyword",
            "The html itself",
            "That"
            ],
        correctAnswer: "The object containing the keyword 'this'"
    },
    {   
        question: "What does the .length method do?",
        answers: 
            ["Sets the array's length",
            "Tells you how many words are in a paragraph",
            "Gives the number of items in an array or object",
            "Measures how wide your screen is"
            ],
        correctAnswer: "Gives the number of items in an array or object"
    },
    {   
        question: "What is the difference between == and ===?",
        answers: 
            ["== compares length and type of two items, === just compares length",
            "== compares values of two items, === compares both value and type",
            "== is equals equals, === is equals equals equals",
            "== is a strict comparison, === is a loose comparison"
            ],
        correctAnswer: "== compares values of two items, === compares both value and type"
    },
    {   
        question: "Which of the following is not a valid comparison operator in JavaScript?",
        answers: 
            ["==",
            "=<",
            "===",
            ">"
            ],
        correctAnswer: "=<"
    },
    {   
        question: "What is the difference between querySelector and querySelectorAll?",
        answers: 
            ["querySelector selects an element with a specific selector, querySelectorAll selects all elements with a specific selector",
            "querySelectorAll selects all elements within the html, querySelector isn't a thing",
            "querySelector selects one query, querySelectorAll selects all queries",
            "querySelector is cooler than querySelectorAll"
            ],
        correctAnswer: "querySelector selects an element with a specific selector, querySelectorAll selects all elements with a specific selector"
    },
    {   
        question: "How would you select an item with a class of 'container' using querySelector?",
        answers: 
            ["document.querySelector(#container)",
            "document.querySelector('.container')",
            "document.querySelector('container')",
            "document.querySelector = (container)"
            ],
        correctAnswer: "document.querySelector('.container')"
    },
    {   
        question: "What is event bubbling?",
        answers: 
            ["When you shake an event before opening it",
            "When listeners are fired from the event, down",
            "When listeners are fired from the event, up",
            "When an event happens a bunch of times"
            ],
        correctAnswer: "When listeners are fired from the event, up"
    },
    {   
        question: "Which of the following is not an example of an event that can be listened for with addEventListener?",
        answers: 
            ["mouseover",
            "click",
            "keydown",
            "enter"
            ],
        correctAnswer: "enter"
    },
    {   
        question: "Where in the HTML document do you put the <script> tags?",
        answers: 
            ["In the <head> tag",
            "Before the closing <body> tag",
            "Before the opening <head> tag",
            "After the closing <body> tag"
            ],
        correctAnswer: "Before the closing <body> tag"
    }
]

//set up js objects for selectors in html and variables
var questionText = document.querySelector(".question-text");
var startButton = document.querySelector(".start-button");
var buttonDiv = document.querySelector(".button-div")
var quizContainer = document.querySelector(".quiz-container");
var incorrect = document.querySelector("#incorrect");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var timerEl = document.querySelector("#timer");
var timer;
var timeRemaining;
var score = 0;
var currQuestion;
var index = 0;
var scores = [];


//function that starts timer
function startTimer() {
    timeRemaining = 10;
    // Sets timer
    timer = setInterval(function() {
        //while time still remains, reduce time remaining at a rate of 1s
    if (timeRemaining > 0) {
        timerEl.textContent = timeRemaining;
        timeRemaining--;
        }
    else if (timeRemaining === 0) {
        timerEl.textContent = '0',
        clearInterval(timer);
        endGame();
    }
    }, 1000);
};

//shows question based on index being grabbed from array
//how to loop through array indexes when button was clicked 
function showQuestions(){
        currQuestion = questions[index].question;
        questionText.textContent = currQuestion;
        option1.textContent = questions[index].answers[0];
        option2.textContent = questions[index].answers[1];
        option3.textContent = questions[index].answers[2];
        option4.textContent = questions[index].answers[3];

        //listen for clicks on answer options
        quizContainer.addEventListener("click", function(e){
            var clickedAns = e.target;
     
        //if statement checks if answer clicked was correct,
        if (clickedAns.textContent === questions[index].correctAnswer) {
            console.log("success");
            index ++;
            score++;
            console.log(index);
            console.log(score);
            showQuestions();
        }else{
            console.log("incorrect!");
            index ++;
            showQuestions();
        }
        });
    }


//set up and run startGame on click
startButton.addEventListener("click", function startGame(){
    quizContainer.setAttribute("style", "visibility: visible;");
    startButton.setAttribute("style", "visibility: hidden;");
    //timer is started when start button is clicked
    startTimer();
    showQuestions();
});

//function to store score (incomplete)
function storeScore(){
    localStorage.setItem("Score", score)
    

}

function renderHighScores(){}

function endGame(){
    questionText.textContent = "Game Over.  Your score was " + score;
    //hide quiz container w answer options
    quizContainer.setAttribute("style", "visibility: hidden;");
    //show start button again
    startButton.setAttribute("style", "visibility: visible;");
    //set start button text to "play again"
    startButton.textContent = "Play Again"
    var saveScore = document.createElement("button");
    saveScore.textContent = "Save my Score";
    saveScore.addEventListener("click", storeScore())
    //reset question index and score to 0
    index = 0;
    score = 0;

}