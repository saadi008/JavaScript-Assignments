// console.log("JavaScript Connected!");


//                     MATH METHODS

// Q. 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//               SOLUTION: 

// var userInput = prompt("Enter any positive number here:");
// var number = Number(userInput);

// document.write("Number: " + number + "<br/>");
// document.write("Round off value: " + Math.round(number) + "<br/>");
// document.write("Floor value: " + Math.floor(number) + "<br/>");
// document.write("Ceil value: " + Math.ceil(number));




// Q. 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//               SOLUTION: 

// var userInput = prompt("Enter any negative floating number:");
// var number = Number(userInput);

// document.write("Number: " + number + "<br/>");
// document.write("Round off value: " + Math.round(number) + "<br/>");
// document.write("Floor value: " + Math.floor(number) + "<br/>");
// document.write("Ceil value: " + Math.ceil(number));




// Q. 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//               SOLUTION: 

// var userInput = prompt("Enter any number (positive or negative):");
// var number = Number(userInput);

// document.write("The absolute value of " + number + " is " + Math.abs(number));




// Q. 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

//               SOLUTION: 

// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceValue);




// Q. 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

//               SOLUTION: 

// var toss = Math.floor(Math.random() * 2);

// if (toss === 0) {
//     document.write("<b>Random coin value:</b> Heads" + "<br/>" + toss);
// } else {
//     document.write("<b>Random coin value:</b> Tails" + "<br/>" + toss);
// }




// Q. 6. Write a program that shows a random number between 1 and 100 in your browser.

//               SOLUTION: 

// var randomNum = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNum);




// Q. 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//               SOLUTION: 

// var userInput = prompt("Enter your weight:");
// var weight = parseFloat(userInput);

// document.write("<b>The weight of user is:</b> " + weight + " kilograms");




// Q. 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNum = Math.floor(Math.random() * 10) + 1;
// // console.log(secretNum);

// var userGuess = +prompt("Enter a number between 1 and 10");
// // var number = Number(userGuess);

// if (userGuess === secretNum) {
//     document.write("<b>Congratulations!</b> You guessed the secret number 🎉");
// } else {
//     document.write("<b>Try again!</b> The secret number was " + secretNum);
// }
