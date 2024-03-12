// Define an array to hold the questions in order
var questionQueue = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13];
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
    outputDiv.innerHTML += output;
}

// Function to display buttons for next question
function displayNextButton() {
    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = '<button onclick="executeNextQuestion()">Next Question</button>';
}

// Function for question 1
function question1() {
    var num1 = parseFloat(prompt("Enter the first number for Question 1:"));
    var num2 = parseFloat(prompt("Enter the second number for Question 1:"));
    var sum = num1 + num2;
    displayOutput("<div class='question-container'><h2>Question 1</h2><p>The sum of " + num1 + " and " + num2 + " is: " + sum + "</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 2
function question2() {
    var num1 = parseFloat(prompt("Enter the first number for Question 2:"));
    var num2 = parseFloat(prompt("Enter the second number for Question 2:"));
    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var division = num1 / num2;
    var modulus = num1 % num2;
    displayOutput("<div class='question-container'><h2>Question 2</h2><p>Sum: " + num1 + " + " + num2 + " = " + addition + "</p><p>Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "</p><p>Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "</p><p>Division: " + num1 + " / " + num2 + " = " + division + "</p><p>Modulus: " + num1 + " % " + num2 + " = " + modulus + "</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 3
function question3() {
    var myVariable;
    displayOutput("<div class='question-container'><h2>Question 3</h2><p>Value after variable declaration is: " + myVariable + "</p>");
    myVariable = 5;
    displayOutput("<p>Initial value: " + myVariable + "</p>");
    myVariable++;
    displayOutput("<p>Value after increment is: " + myVariable + "</p>");
    myVariable += 7;
    displayOutput("<p>Value after addition is: " + myVariable + "</p>");
    myVariable--;
    displayOutput("<p>Value after decrement is: " + myVariable + "</p>");
    var remainder = myVariable % 3;
    displayOutput("<p>The remainder is: " + remainder + "</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 4
function question4() {
    var ticketPrice = 600;
    var numberOfTickets = 5;
    var totalCost = ticketPrice * numberOfTickets;
    displayOutput("<div class='question-container'><h2>Question 4</h2><p>The cost of buying " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 5
function question5() {
    var number = parseFloat(prompt("Enter a number to display its multiplication table:"));
    displayOutput("<div class='question-container'><h2>Question 5</h2><h2>Multiplication Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        displayOutput("<p>" + number + " x " + i + " = " + result + "</p>");
    }
    displayOutput("</div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 6
function question6() {
    var celsiusTemperature = parseFloat(prompt("Enter a temperature in Celsius:"));
    var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
    displayOutput("<div class='question-container'><h2>Question 6</h2><p>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "°F</p>");

    var fahrenheitTemp = parseFloat(prompt("Enter a temperature in Fahrenheit:"));
    var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
    displayOutput("<p>" + fahrenheitTemp + "°F is " + celsiusTemp + "°C</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 7
function question7() {
    var priceItem1 = parseFloat(prompt("Enter the price of item 1:"));
    var priceItem2 = parseFloat(prompt("Enter the price of item 2:"));
    var quantityItem1 = parseInt(prompt("Enter the ordered quantity of item 1:"));
    var quantityItem2 = parseInt(prompt("Enter the ordered quantity of item 2:"));
    var shippingCharges = parseFloat(prompt("Enter the shipping charges:"));

    var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

    displayOutput("<div class='question-container'><h2>Question 7</h2><h2>Receipt</h2>");
    displayOutput("<p>Price of item 1: $" + priceItem1 + "</p>");
    displayOutput("<p>Price of item 2: $" + priceItem2 + "</p>");
    displayOutput("<p>Ordered quantity of item 1: " + quantityItem1 + "</p>");
    displayOutput("<p>Ordered quantity of item 2: " + quantityItem2 + "</p>");
    displayOutput("<p>Shipping charges: $" + shippingCharges + "</p>");
    displayOutput("<h3>Total cost: $" + totalCost + "</h3></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 8
function question8() {
    var totalMarks = parseFloat(prompt("Enter the total marks:"));
    var marksObtained = parseFloat(prompt("Enter the marks obtained:"));
    var percentage = (marksObtained / totalMarks) * 100;
    displayOutput("<div class='question-container'><h2>Question 8</h2><p>Total Marks: " + totalMarks + "</p><p>Marks Obtained: " + marksObtained + "</p><h3>Percentage: " + percentage.toFixed(2) + "%</h3></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 9
function question9() {
    var usDollars = parseFloat(prompt("Enter the amount in US Dollars:"));
    var saudiRiyals = parseFloat(prompt("Enter the amount in Saudi Riyals:"));
    var exchangeRateUSDtoPKR = 274.80;
    var exchangeRateSARtoPKR = 28;
    var totalCurrencyInPKR = (usDollars * exchangeRateUSDtoPKR) + (saudiRiyals * exchangeRateSARtoPKR);
    displayOutput("<div class='question-container'><h2>Question 9</h2><p>Total US Dollars: " + usDollars + "</p><p>Total Saudi Riyals: " + saudiRiyals + "</p><h3>Total Currency in PKR: " + totalCurrencyInPKR.toFixed(2) + " PKR</h3></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 10
function question10() {
    var initialValue = 10;
    var result = ((initialValue + 5) * 10) / 2;
    displayOutput("<div class='question-container'><h2>Question 10</h2><p>Initial Value: " + initialValue + "</p><p>Result: " + result + "</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 11
function question11() {
    var currentYear = new Date().getFullYear();
    var birthYear = parseInt(prompt("Enter your birth year:"));
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;
    displayOutput("<div class='question-container'><h2>Question 11</h2><p>They are either " + age1 + " or " + age2 + " years old</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 12
function question12() {
    var radius = parseFloat(prompt("Enter the radius of the circle:"));
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * radius * radius;
    displayOutput("<div class='question-container'><h2>Question 12</h2><p>The circumference is " + circumference.toFixed(2) + "</p><p>The area is " + area.toFixed(2) + "</p></div>");
    // Proceed to the next question after displaying the result
    displayNextButton();
}

// Function for question 13
function question13() {
    var snack = prompt("Enter your favorite snack:");
    var currentAge = parseInt(prompt("Enter your current age:"));
    var maxAge = parseInt(prompt("Enter the maximum age:"));
    var amountPerDay = parseFloat(prompt("Enter the estimated amount per day:"));
    var totalSnacksNeeded = (maxAge - currentAge) * 365 * amountPerDay;
    displayOutput("<div class='question-container'><h2>Question 13</h2><p>You will need " + totalSnacksNeeded + " to last you until the ripe old age of " + maxAge + "</p></div>");
    // No need for next question button as this is the last question
}

// Start executing questions by calling the executeNextQuestion function
executeNextQuestion();
