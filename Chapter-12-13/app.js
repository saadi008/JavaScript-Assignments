var questionQueue = [question1, question2, question3, question4, question5, question6, question7];
var currentQuestionIndex = 0;


function executeNextQuestion() {
    if (currentQuestionIndex < questionQueue.length) {
        var currentQuestion = questionQueue[currentQuestionIndex];
        currentQuestionIndex++;
        currentQuestion();
    }
}

function repeatLastQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; 
        executeNextQuestion();
    }
}


function displayOutput(output) {
    var outputDiv = document.getElementById("output");
    var questionNumber = currentQuestionIndex;
    outputDiv.innerHTML = "<h2>Question " + questionNumber + "</h2>";
    outputDiv.innerHTML += "<div class='result-container'>" + output + "</div>";
}

// Function to display buttons for next question
function displayButtons() {
    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = '<button onclick="executeNextQuestion()">Next Question</button>';
    if (currentQuestionIndex > 0) {
        buttonsDiv.innerHTML += '<button onclick="repeatLastQuestion()">Repeat Question</button>';
    }
}

// Function for question 1
function question1() {
    var input = prompt("Enter a character (number or string):");
    var message;
    var ascii = input.charCodeAt(0);

    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        if (ascii >= 65 && ascii <= 90) {
            message = "Uppercase letter";
        } else {
            message = "Lowercase letter";
        }
    } else if (ascii >= 48 && ascii <= 57) {
        message = "Number";
    } else {
        message = "Special character or not in ASCII range";
    }

    displayOutput("Input: " + input + "<br>Type: " + message);
    displayButtons();
}

// Function for question 2
function question2() {
    var num1 = parseInt(prompt("Enter the first number:"));
    var num2 = parseInt(prompt("Enter the second number:"));
    var result;

    if (num1 > num2) {
        result = "The larger number is: " + num1;
    } else if (num2 > num1) {
        result = "The larger number is: " + num2;
    } else {
        result = "Both numbers are equal.";
    }

    displayOutput(result);
    displayButtons();
}

// Function for question 3
function question3() {
    var number = parseInt(prompt("Enter a number:"));
    var message;

    if (number > 0) {
        message = "The number is positive.";
    } else if (number < 0) {
        message = "The number is negative.";
    } else {
        message = "The number is zero.";
    }

    displayOutput(message);
    displayButtons();
}

// Function for question 4
function question4() {
    var input = prompt("Enter a character:");
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    if (input.length === 1) {
        var lowercaseInput = input.toLowerCase();

        if (vowels.includes(lowercaseInput)) {
            displayOutput("True. It is a vowel.");
        } else {
            displayOutput("False. It is not a vowel.");
        }
    } else {
        displayOutput("Please enter only one character.");
    }

    displayButtons();
}

// Function for question 5
function question5() {
    var correctPassword = "password123";
    var userPassword = prompt("Enter your password:");

    if (!userPassword) {
        displayOutput("Please enter your password.");
    } else if (userPassword === correctPassword) {
        displayOutput("Correct! The password you entered matches the original password.");
    } else {
        displayOutput("Incorrect password.");
    }

    displayButtons();
}

// Function for question 6
function question6() {
    var greeting;
    var hour = 13;

    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }

    displayOutput(greeting);
    displayButtons();
}

// Function for question 7
function question7() {
    var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));
    var message;

    if (time >= 0 && time <= 2359) {
        if (time >= 0 && time < 1200) {
            message = "Good morning!";
        } else if (time >= 1200 && time < 1700) {
            message = "Good afternoon!";
        } else if (time >= 1700 && time < 2100) {
            message = "Good evening!";
        } else {
            message = "Good night!";
        }
    } else {
        message = "Invalid time format!";
    }

    displayOutput(message);
    displayButtons();
}

// Execute the first question
executeNextQuestion();
