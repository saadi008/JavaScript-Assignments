// console.log("javascript connected!");


//        STRING METHODS

// Q. 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//           SOLUTION:

// var firstName = prompt("Type your first name:");
// var lastName = prompt("Type your last name:");

// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName + " to our website.");




//Q. 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user input in your browser

//           SOLUTION:

// var userInput = prompt("Tell us about your favourite mobile phone model.");
// document.write("My favorite phone is: " + userInput + "<br/>");
// document.write("Length of string: " + userInput.length);




// Q. 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

//           SOLUTION:

// var word = "Pakistani";
// var index = word.indexOf("n");

// document.write("String: " + word + "<br/>");
// document.write("Index of 'n': " + index);




// Q. 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

//           SOLUTION:

// var word = "Hello World";
// var index = word.lastIndexOf("l");

// document.write("String: " + word + "<br/>");
// document.write("Last index of 'l': " + index);




//Q. 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

//           SOLUTION:

// var word = "Pakistani";
// var char = word.charAt(3);

// document.write("String: " + word + "<br/>");
// document.write("Character at index 3: " + char);




// Q. 6. Repeat Q1 using string concat() method.

//           SOLUTION:

// var firstName = prompt("Type your first name:");
// var lastName = prompt("Type your last name:");

// var fullName = firstName.concat(" ", lastName)
// alert("Welcome " + fullName + " to our website.");




// Q. 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

//           SOLUTION:

// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br/>");
// document.write("After replacement: " + replaceCity);




// Q. 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

//           SOLUTION:

// var message = "Ali and Sami are best friends. They play cricket and  football together.";
// var newMsg = message.replaceAll("and", "&");

// document.write("Message: " + message + "<br/>");
// document.write("Message after replacement: " + newMsg);




// Q. 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

//           SOLUTION:

// var str = "472";
// document.write("Value: " + str + "<br/>");
// document.write("Type: " + typeof(str) + "<br/><br/>");

// var num = Number(str);
// document.write("Value: " + num + "<br/>");
// document.write("Type: " + typeof(num) + "<br/><br/>");




// Q. 10. Write a program that takes user input. Convert and show the input in capital letters.

//           SOLUTION:

// var userInput = prompt("Enter any text:");

// document.write("User input: " + userInput + "<br/>");
// document.write("Upper case: " + userInput.toUpperCase());




// Q. 11. Write a program that takes user input. Convert and show the input in title case.

//           SOLUTION:

// var userInput = prompt("Enter any text:").toLowerCase();
// var titleCase = userInput.charAt(0).toUpperCase() +  userInput.slice(1);

// document.write("User input: " + userInput + "<br/>");
// document.write("Title case: " + titleCase);




// Q. 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

//           SOLUTION:

// var num = 35.56;
// var strNum = num.toString();
// var remmoveDot = strNum.replace(".", "") ;

// document.write("Number: " + num + "<br/>");
// document.write("Result: " + remmoveDot);




// Q. 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

//           SOLUTION:

// var username = prompt("Enter your username:");

// var forbidden = ["@", ".", ",", "!"];
// var isValid = true;

// for (var i = 0; i < username.length; i++) {
//     if (forbidden.includes(username[i])) {
//         isValid = false;
//         break;
//     }
// }


// if (!isValid) {
//     alert("Invalid username! Please do not use [@ . , !]");
// } else {
//     document.write("Username accepted: " + username);
// }




// Q. 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

//           SOLUTION:

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to SAADI Bakery! What do you want to order?").toLowerCase();
// var isFound = false;

// for (var i = 0; i < a.length; i++) {
//     if (a[i].toLowerCase() === userInput) {
//         isFound = true;
//         break;
//     }
// }

// if (isFound) {
//     alert(userInput + " is availabe at index " + i + " in our bakery.");
// } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }




//Q. 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

//           SOLUTION:

// var password = prompt("Enter your password:");

// var isValid = true;

// if (password.length < 6) {
//     isValid = false;
// }

// var firstCharCode = password.charCodeAt(0);
// if (firstCharCode >= 48 && firstCharCode <= 57) {
//     isValid = false;
// }

// var hasLetter = false;
// var hasNumber = false;

// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         hasLetter = true;
//     }

//     else if (code >= 48 && code <= 57) {
//         hasNumber = true;
//     }
// }

// if (!hasLetter || !hasNumber) {
//     isValid = false;
// }

// if (isValid) {
//     alert("Password is valid!");
// } else {
//     alert("Invalid password! Password must:\n- Be at least 6 characters long\n- Contain letters and numbers\n- Not start with a number");
// }





//Q. 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

//           SOLUTION:

// var university = "University of Karachi";
// var arr = university.split("");

// for (var i = 0; i < arr.length; i ++) {
//     document.write(arr[i] + "<br/>");
// }





// Q. 17. Write a program to display the last character of a user input.

//           SOLUTION:

// var userInput = prompt("Enter any text:");
// var lastChar = userInput.charAt(userInput.length -1);

// document.write("User input: " + userInput + "<br/>");
// document.write("Last character of input: " + lastChar);




// Q. 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

//           SOLUTION:

// var string = "The quick brown fox jumps over the lazy dog";
// var lowerStr = string.toLowerCase();
// var words = lowerStr.split(" ");

// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write("Text: " + string + "<br/>");
// document.write("There are " + count + " occurence(s)  of word 'the'");