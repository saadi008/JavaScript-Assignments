// Function for question 1
function question1() {
    var studentNames = []; 
    displayOutput("An empty array has been declared to store student names in the future using JS object notation.", 1);
    displayButtons();
}

// Function for question 2
function question2() {
    var studentNames = {}; 
    displayOutput("An empty object has been declared to store student names in the future using JS object notation.", 2);
    displayButtons();
}

// Function for question 3
function question3() {
    var stringsArray = ["apple", "banana", "cherry", "date"]; 

    displayOutput("A strings array has been declared and initialized with values: " + stringsArray.join(", "), 3);
    displayButtons();
}

// Function for question 4
function question4() {
    var numbersArray = [1, 2, 3, 4, 5]; 

    displayOutput("A numbers array has been declared and initialized with values: " + numbersArray.join(", "), 4);
    displayButtons();
}

// Function for question 5
function question5() {
    var booleanArray = [true, false, true];

    displayOutput("A boolean array has been declared and initialized with values: " + booleanArray.join(", "), 5);
    displayButtons();
}

// Function for question 6
function question6() {
   
    var mixedArray = ["apple", 1, true]; 

    displayOutput("A mixed array has been declared and initialized with values: " + mixedArray.join(", "), 6);
    displayButtons();
}

// Function for question 7
function question7() {
    var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]; 

    displayOutput("Available education qualifications in Pakistan: " + educationQualifications.join(", "), 7);
    displayButtons();
}

// Function for question 8
function question8() {
    // Question 8 logic here
    var studentNames = ["John", "Alice", "Bob"]; 
    var studentScores = [380, 420, 450]; 
    var totalMarks = 500;

    displayOutput("Student Scores:", 8);
    for (var i = 0; i < studentNames.length; i++) {
        var percentage = (studentScores[i] / totalMarks) * 100;
        displayOutput(studentNames[i] + ": Scored " + studentScores[i] + " marks. Percentage: " + percentage.toFixed(2) + "%", 8);
    }
    displayButtons();
}

// Function for question 9
function question9() {
    // Question 9 logic here
    var colorNames = ["red", "green", "blue"]; // Array to store color names
    var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
    colorNames.unshift(colorToAddAtBeginning); 
    var colorToAddAtEnd = prompt("Enter a color to add to the end:");
    colorNames.push(colorToAddAtEnd); 
    // Add two more colors to the beginning
    colorNames.unshift("yellow", "orange");

    // Delete the first color
    colorNames.shift();

    // Delete the last color
    colorNames.pop();
    var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
    var colorToAdd = prompt("Enter a color to add:");
    colorNames.splice(indexToAddColor, 0, colorToAdd); 
    var indexToDelete = parseInt(prompt("Enter the index to delete colors from:"));
    var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
    colorNames.splice(indexToDelete, numberOfColorsToDelete); 

    displayOutput("Updated Color Names: " + colorNames.join(", "), 9);
    displayButtons();
}

// Function for question 10
function question10() {
    var studentScores = [50, 80, 30, 70, 60]; 
    studentScores.sort(function(a, b){return a - b});

    displayOutput("Sorted Student Scores: " + studentScores.join(", "), 10);
    displayButtons();
}

// Function for question 11
function question11() {
    var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]; 
    var selectedCities = [];
    selectedCities = cityNames.slice(1, 4); 
    displayOutput("Selected Cities: " + selectedCities.join(", "), 11);
    displayButtons();
}

// Function for question 12
function question12() {
    var arr = ["This", "is", "my", "cat"]; 
    var singleString = arr.join(" ");

    displayOutput("Single String: " + singleString, 12);
    displayButtons();
}

// Function for question 13
function question13() {
    var fifoArray = []; 
    fifoArray.push("Value 1");
    fifoArray.push("Value 2");
    fifoArray.push("Value 3");

   
    var firstValue = fifoArray.shift();
    var secondValue = fifoArray.shift();
    var thirdValue = fifoArray.shift();

    displayOutput("Values accessed in FIFO order: " + firstValue + ", " + secondValue + ", " + thirdValue, 13);
    displayButtons();
}

// Function for question 14
function question14() {
    var lifoArray = []; 
    lifoArray.push("Keyboard");
    lifoArray.push("Mouse");
    lifoArray.push("Printer");
    lifoArray.push("Monitor");

   
    var monitor = lifoArray.pop();
    var printer = lifoArray.pop();
    var mouse = lifoArray.pop();
    var keyboard = lifoArray.pop();

    displayOutput("Values accessed in LIFO order: " + keyboard + ", " + mouse + ", " + printer + ", " + monitor, 14);
    displayButtons();
}

// Function for question 15
function question15() {
    var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    var dropdownMenu = "<select>";
    for (var i = 0; i < phoneManufacturers.length; i++) {
        dropdownMenu += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
    }
    dropdownMenu += "</select>";
    displayOutput("Select Phone Manufacturer: " + dropdownMenu, 15);
    displayButtons();
}


var questionQueue = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15];
var currentQuestionIndex = 0;

// Function to execute the previous question
function repeatLastQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; 
        executeNextQuestion();
    }
}

// Function to display output
function displayOutput(output, questionNumber) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<div class='result-container'><h3>Question " + questionNumber + ":</h3>" + output + "</div>";
}


function displayButtons() {
    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = '<button onclick="executeNextQuestion()">Next Question</button>';
    if (currentQuestionIndex > 0) {
        buttonsDiv.innerHTML += '<button onclick="repeatLastQuestion()">Repeat Question</button>';
    }
}


function executeNextQuestion() {
    if (currentQuestionIndex < questionQueue.length) {
        var currentQuestion = questionQueue[currentQuestionIndex];
        currentQuestionIndex++;
        currentQuestion();
    }
}

// Execute the first question
executeNextQuestion();
