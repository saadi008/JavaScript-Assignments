
var questionQueue = [question1, question2, question3, question4, question5];
var currentQuestionIndex = 0;

// Function to execute the next question
function executeNextQuestion() {

    if (currentQuestionIndex < questionQueue.length) {

        var currentQuestion = questionQueue[currentQuestionIndex];

        currentQuestionIndex++;

        currentQuestion();
    }
}

// Function to display output
function displayOutput(output) {
    var outputDiv = document.getElementById("output");
    var questionNumber = currentQuestionIndex;
    outputDiv.innerHTML += "<h2>Question " + questionNumber + "</h2>";
    outputDiv.innerHTML += "<div class='result-container'>" + output + "</div>";
}


function displayNextButton() {
    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = '<button onclick="executeNextQuestion()">Next Question</button>';
}

// Function for question 1
function question1() {
    var num = parseFloat(prompt("Enter a number:"));
    var result1 = "The value of your number is " + num + ".";
    num++;
    var result2 = "<br>The value of ++your number is " + num + ".<br> Now the value of your number is " + num + ".";
    var result3 = "<br>The value of your number++ is " + num + ".<br>";
    num++;
    var result4 = "Now the value of your number is " + num + ".";
    num--;
    var result5 = "<br>The value of --your number is " + num + ".<br> Now the value of your number is " + num + ".";
    var result6 = "<br>The value of your number-- is " + num + ".<br>";
    num--;
    var result7 = "Now the value of your number is " + num + ".";
    displayOutput(result1 + result2 + result3 + result4 + result5 + result6 + result7);

    displayNextButton();
}

// Function for question 2
function question2() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    var explanation = "--a: Decrement a (a is now 1)<br>--a - --b: Decrement a and decrement b (a is now 0, b is now 0)<br>--a - --b + ++b: Decrement a, decrement b, and increment b (a is still 0, b is now 1)<br>--a - --b + ++b + b--: Decrement a, decrement b, increment b, and then use b for calculation (a is still 0, b is now 0 after calculation)";
    displayOutput("a = 2, b = 1<br>Result: " + result + "<br>Explanation:<br>" + explanation);

    displayNextButton();
}

// Function for question 3
function question3() {
    var name = prompt("Enter your name:");
    var greeting = "Hello, " + name + "!";
    displayOutput(greeting);

    displayNextButton();
}

// Function for question 4
function question4() {
    var number = parseInt(prompt("Enter a number (default is 5 if left empty):")) || 5;
    var multiplicationTable = "";
    for (var i = 1; i <= 10; i++) {
        multiplicationTable += number + " x " + i + " = " + (number * i) + "<br>";
    }
    displayOutput("Multiplication Table of " + number + ":<br>" + multiplicationTable);

    displayNextButton();
}

// Function for question 5
function question5() {
    var subject1 = prompt("Enter the name of subject 1:");
    var subject2 = prompt("Enter the name of subject 2:");
    var subject3 = prompt("Enter the name of subject 3:");
    var totalMarks = 100;
    var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
    var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
    var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));
    var totalObtainedMarks = marks1 + marks2 + marks3;
    var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
    var result = "<div class='table-container'><table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
    result += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>";
    result += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>";
    result += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>";
    result += "<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>";
    result += "</table></div><br>Percentage: " + percentage.toFixed(2) + "%";
    displayOutput(result);

}



executeNextQuestion();
