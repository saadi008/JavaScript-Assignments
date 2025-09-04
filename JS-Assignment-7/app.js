//                     USER INPUT & CONDITIONAL STATEMENT 

// Q. 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

//                   SOLUTION :

// var cityName = prompt("Type your city name :");
// cityName = cityName.toLowerCase();

// if (cityName === "Karachi") {
//     document.write("Welcome to city of lights.");
// } else {
//     document.write("You're Not Living in karachi.");
// }





// Q. 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

//                   SOLUTION :

// var gender = prompt("Enter your Gender :" , "male OR female");
// gender = gender.toLowerCase(); 

// if (gender === "male") {
//     document.write("Good Morning Sir.");
// } else if (gender === "female") {
//     document.write("Good Morning Ma'am.");
// } else {
//     document.write("Invalid input. Please enter male or female.");
// }





// Q. 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

//                   SOLUTION :

// var colorName = prompt("Type your Color name here :" , "Green|Yellow|Red");
// colorName = colorName.toLowerCase();

// if (colorName === "red") {
//     document.write("🔴 Must Stop");
// } else if (colorName === "yellow") {
//     document.write("🟡 Ready to move");
// } else if (colorName === "green") {
//     document.write("🟢 Move now");
// } else {
//     document.write("⚪ Invalid signal color");
// }





// Q. 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

//                   SOLUTION :

// var fuel = +prompt("Enter your renmaining fuel in liters :");

// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// } else {
//     document.write("Fuel Level is okay.")
// }





// Q. 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

//                   SOLUTION : 

//A
//  Alert show hoga.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//B
//   ALert nehi chalega.
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// C
// Condition 2 true hoge And Condition 4 true hoge.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// D
// Alert mei show hoga "The cost is equal"
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// E
// Alert mei ayega True only.
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// F
// Conditon true ayge "car is maller than cat"
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }





// Q.6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

//                   SOLUTION : 

// var sub1Marks = +prompt("Enter your subject 1 obtained Marks :");
// var sub2Marks = +prompt("Enter your subject 2 obtained Marks :");
// var sub3Marks = +prompt("Enter your subject 3 obtained Marks :");
// var totalMarks = +prompt("Enter total Marks :");

// var marksObtained = sub1Marks + sub2Marks + sub3Marks;
// var percentage = (marksObtained / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >=70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >=60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h2>Marks Sheet</h2>");
// document.write("Total marks : " + totalMarks + "<br/>");
// document.write("Marks obtained : " + marksObtained + "<br/>");
// document.write("Percentage : " + percentage.toFixed(2) + "%<br/>");
// document.write("Grade : " + grade + "<br/>");
// document.write("Remarks : " + remarks);





// Q.7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

//                   SOLUTION : 

// var secretNum = 7;
// var userGuess = +prompt("Enter your guess number :" , "1-10");

// if (userGuess === secretNum) {
//     document.write("Bingo! Correct answer");
// } else if (userGuess +1 === secretNum) {
//     document.write("Close enough to the Correct answer");
// } else if (userGuess -1 === secretNum) {
//     document.write("Close but a bit high");
// } 
// else {
//     document.write("Try again!");
// }





// Q. 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

//                   SOLUTION : 

// var num = +prompt("Enter a number :");

// if (num % 3 === 0) {
//     document.write(num + " is divisible by 3");
// } else {
//     document.write(num + " is not divisible by 3");
// }





// Q. 9 Write a program that checks whether the given input is an even number or an odd number.

//                   SOLUTION : 

// var num = +prompt("Enter a number :");

// if (num % 2 === 0) {
//     document.write("Your given number is Even :");
// } else {
//     document.write("Your given number is Odd :");
// }





// Q. 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//                   SOLUTION : 

// var temp = +prompt("Enter a today's temprature :");

// if (temp >= 40) {
//     document.write("It is too hot outside.");
// } else if (temp >= 30) {
//     document.write("The Weather today is Normal.");
// } else if (temp >= 20) {
//     document.write("Today’s Weather is cool.");
// } else if (temp > 0 && temp <= 19) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("It's Freeze.");
// }





// Q. 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//                   SOLUTION : 

// var num1 = +prompt("Enter a first number for calculation :");
// var num2 = +prompt("Enter a second number for calculation :");
// var operator = prompt("Enter an Operator :" , "+,-,*,/,%");

// if (operator === "+") {
//     document.write(num1 + num2);
// } else if (operator === "-") {
//     document.write(num1 - num2);
// } else if (operator === "*") {
//     document.write(num1 * num2);
// } else if (operator === "/") {
//     document.write(num1 / num2);
// } else if (operator === "%") {
//     document.write(num1 % num2);
// } else {
//     document.write("Invalid Operator.");
// }




