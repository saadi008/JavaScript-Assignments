// Define an array to hold the questions in order
var questionQueue = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11];
var currentQuestionIndex = 0; // Track the index of the current question

// Function to execute the next question
function executeNextQuestion() {
    // Check if there are more questions to execute
    if (currentQuestionIndex < questionQueue.length) {
        // Get the current question function from the queue
        var currentQuestion = questionQueue[currentQuestionIndex];
        // Increment the current question index for the next iteration
        currentQuestionIndex++;
        // Call the current question function
        currentQuestion();
    }
}

// Function to display output
function displayOutput(output) {
    var outputDiv = document.getElementById("output");
    var questionNumber = currentQuestionIndex; // Get the current question number
    outputDiv.innerHTML += "<h2>Question " + questionNumber + "</h2>"; // Display the question number
    outputDiv.innerHTML += "<div class='result-container'>" + output + "</div>";
}

// Function to display buttons for next question
function displayNextButton() {
    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = '<button onclick="executeNextQuestion()">Next Question</button>';
}

// Function for question 1
function question1() {
    var city = prompt("Enter the name of your city:");
    if (city.toLowerCase() === "karachi") {
        displayOutput("Welcome to the city of lights");
    } else {
        displayOutput("Welcome!");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 2
function question2() {
    var gender = prompt("Enter your gender (male/female):");
    if (gender.toLowerCase() === "male") {
        displayOutput("Good Morning Sir");
    } else if (gender.toLowerCase() === "female") {
        displayOutput("Good Morning Ma'am");
    } else {
        displayOutput("Good Morning");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 3
function question3() {
    var color = prompt("Enter the color of the road traffic signal:");
    switch (color.toLowerCase()) {
        case "red":
            displayOutput("Must Stop");
            break;
        case "yellow":
            displayOutput("Ready to move");
            break;
        case "green":
            displayOutput("Move now");
            break;
        default:
            displayOutput("Invalid color");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 4
function question4() {
    var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
    if (fuel < 0.25) {
        displayOutput("Please refill the fuel in your car");
    } else {
        displayOutput("You have enough fuel");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 5
function question5() {
    var a = 4;
    if (++a === 5) {
        displayOutput("given condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83) {
        displayOutput("given condition for variable b is true");
    }

    var c = 12;
    if (c++ === 13) {
        displayOutput("condition 1 is true");
    }
    if (c === 13) {
        displayOutput("condition 2 is true");
    }
    if (++c < 14) {
        displayOutput("condition 3 is true");
    }
    if (c === 14) {
        displayOutput("condition 4 is true");
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        displayOutput("The cost equals");
    }

    if (true) {
        displayOutput("True");
    }
    if (false) {
        displayOutput("False");
    }

    if ("car" < "cat") {
        displayOutput("car is smaller than cat");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 6
function question6() {
    var subject1 = prompt("Enter the name of subject 1:");
    var subject2 = prompt("Enter the name of subject 2:");
    var subject3 = prompt("Enter the name of subject 3:");
    var totalMarks = 100;
    var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
    var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
    var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
    var totalObtainedMarks = marks1 + marks2 + marks3;
    var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
    var grade, remarks;
    if (percentage >= 80) {
        grade = "A+";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else if (percentage >= 50) {
        grade = "C";
        remarks = "Below average";
    } else {
        grade = "Fail";
        remarks = "Sorry, you have failed";
    }
    var result = "<div class='table-container'><table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
    result += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>";
    result += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>";
    result += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>";
    result += "<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>";
    result += "</table></div><br>Percentage: " + percentage.toFixed(2) + "%<br>Grade: " + grade + "<br>Remarks: " + remarks;
    displayOutput(result);
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 7
function question7() {
    var secretNumber = 7; // Secret number ranging from 1 to 10
    var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    if (guess === secretNumber) {
        displayOutput("Bingo! Correct answer");
    } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
        displayOutput("Close enough to the correct answer");
    } else {
        displayOutput("Wrong guess! The secret number was " + secretNumber);
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 8
function question8() {
    var number = parseInt(prompt("Enter a number:"));
    if (number % 3 === 0) {
        displayOutput("The number is divisible by 3.");
    } else {
        displayOutput("The number is not divisible by 3.");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 9
function question9() {
    var number = parseInt(prompt("Enter a number:"));
    if (number % 2 === 0) {
        displayOutput("The number is even.");
    } else {
        displayOutput("The number is odd.");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 10
function question10() {
    var temperature = parseFloat(prompt("Enter the temperature:"));
    if (temperature > 40) {
        displayOutput("It is too hot outside.");
    } else if (temperature > 30) {
        displayOutput("The Weather today is Normal.");
    } else if (temperature > 20) {
        displayOutput("Today’s Weather is cool.");
    } else if (temperature > 10) {
        displayOutput("OMG! Today’s weather is so Cool.");
    } else {
        displayOutput("It's freezing outside!");
    }
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 11
function question11() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var operation = prompt("Enter the operation (+, -, *, /, %):");
    var result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = num1 / num2;
        }
    } else if (operation === '%') {
        result = num1 % num2;
    } else {
        result = "Invalid operation";
    }
    displayOutput("Result: " + result);
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Start executing questions by calling the executeNextQuestion function
executeNextQuestion();
