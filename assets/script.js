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

//set up objects for selectors in html
var questionText = document.querySelector(".question-text");
var startButton = document.querySelector(".button-div");
var quizContainer = document.querySelector(".quiz-container");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");