// IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// Q. 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

//                SOLUTION

// var char = prompt("Enter a character or number :");

// if (!isNaN(char)) {
//     document.write(char + " is a number");
// } else {
//      var code = char.charCodeAt(0);

//      if (code >= 65 && code <= 90) {
//         document.write(char + " is an uppercase letter");
//      } else if (code >= 97 && code <= 122) {
//         document.write(char + " is an lowercase letter");
//      } else {
//         document.write("Invalid Input!");
//      }
// }





// Q. 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//                SOLUTION

// var num1 = +prompt("Enter a first number :");
// var num2 = +prompt("Enter a second number :");

// if (num1 > num2) {
//     document.write("Larger number is " + num1);
// } else if (num2 > num1) {
//     document.write("Larger number is " + num2);
// }  else {
//     document.write("Both numbers are equal");
// }





// Q. 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

//                SOLUTION

// var num = +prompt("Enter a number :");

// if (num > 0) {
//     document.write("Your given number " + num + " is positive.");
// } else if (num < 0) {
//     document.write("Your given number " + num + " is negative.");
// } else {
//     document.write("Your given number " + num + " is zero.");
// }





// Q. 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

//                SOLUTION

// var singleChar = prompt("Enter a single character :").toLowerCase();

// if (singleChar === "a" || singleChar === "e" || singleChar === "i" || singleChar === "o" || singleChar === "u") {
//     document.write("True your character is a vowel.");
// } else {
//     document.write("False! Not a vowel.");
// }





// Q. 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

//                SOLUTION

// var correctPswrd = "abc123";
// var userPswrd = prompt("Enter your password :" , "Hint: Initial 3 alphabet & number :");

// if (userPswrd === "" || userPswrd === null) {
//     document.write("Please enter your password");
// } else if (userPswrd === correctPswrd) {
//     document.write("Correct! The password you entered matches the original password");
// } else {
//     document.write("Incorrect password");
// }





// Q. 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//                SOLUTION

// var greeting;
// var  hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// } 

// document.write(greeting);





// Q. 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

//                SOLUTION

// var time = +prompt("Enter time in 24-hour format (e.g. 1900 =7pm):");

// if (time >= 0 && time <= 1159) {
//     document.write("Good Morning");
// } else if (time >= 1200 && time <= 1659) {
//     document.write("Good Afternoon");
// }  else if (time >= 1700 && time <= 2059) {
//     document.write("Good Evening");
// }  else if (time >= 2100 && time <= 2359) {
//     document.write("Good Night");
// } else {
//     document.write("Invalid Time Input!");
// }