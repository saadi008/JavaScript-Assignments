//                ARRAYS

// Q. 1. Declare an empty array using JS literal notation to store student names in future.

//              SOLUTION :

// var studentName = [];



// Q. 2. Declare an empty array using JS object notation to store student names in future.

//              SOLUTION :

// var studentName = new Array();



// Q. 3. Declare and initialize a strings array.

//              SOLUTION :

// var stringArray = ["Apple", "Banana", "Mango", "Orange"];



// Q. 4. Declare and initialize a numbers array

//              SOLUTION :

// var numArray = [10, 20, 30, 40, 50];



// Q. 5. Declare and initialize a boolean array.

//              SOLUTION :

// var booleanArray = [true, false, true, false];



// Q. 6. Declare and initialize a mixed array.

//              SOLUTION :

// var mixedArray = ["saad", 21, true, "DFCS", 3.5];



// Q. 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:

//              SOLUTION :

// var qualifications = ["SSC", "HSC", "BSC", "BS","BCOM", "MS", "M. Phil", "PhD"];

// document.write("<h3>Qualifications:</h3>");
// for (var i = 0; i < qualifications.length; i++){
//     document.write((i+1) + ") " + qualifications[i] + "<br/>");
// }



// Q. 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

//              SOLUTION :

// var students = ["Saad", "Ali", "Babar"];
// var score = [320, 450, 470];
// var totalMarks = 500;

// for(var i = 0; i < students.length; i++){
//     var percentage = (score[i] / totalMarks) * 100;
//     document.write("Score of " + students[i] + " is " + score[i] + ". Percentage: " + percentage + "%<br/>");
// }



// Q. 9. Initialize an array with color names. Display the array elements in your browser.

//              SOLUTION :

// var colors = ["Red", "Blue", "Green", "Yellow"];
// document.write("<h3>Initial colors:</h3>" + colors + "<br/><br/>");

// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.

// var addInBegining = prompt("Whoch color do you want to add at the beginning?");
// colors.unshift(addInBegining);
// document.write("After adding at beginning: " + colors +  "<br/><br/>");

// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.

// var addInEnd = prompt("Which color do you want to add at the end?");
// colors.push(addInEnd);
// document.write("After adding at end: " + colors +  "<br/><br/>");

// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.

// colors.unshift("Brown", "orange");
// document.write("After adding two colors at beginning: " + colors + "<br/><br/>");

// // d. Delete the first color in the array. Display the updated
// // array in your browser.

// colors.shift();
// document.write("After deleting first color: " + colors + "<br/><br/>");

// // e. Delete the last color in the array. Display the updated
// // array in your browser

// colors.pop();
// document.write("After deleting last color: " + colors + "<br/><br/>");

// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.

// var userIndex = +prompt("At which index do you want to add a color?");
// var userColor = prompt("Enter the color name to add:");
// colors.splice(userIndex,0,userColor);
// document.write("After adding color at index " + userIndex + ": " + colors +  "<br/><br/>");

// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

// var userDltIndex = +prompt("At which index do you want to delete a colors?");
// var userDltCount = +prompt("How many colors do you wnt to delete?");
// colors.splice(userDltIndex, userDltCount);
// document.write("After deleting " + userDltCount + " color(s) from index " + userDltIndex + ": " + colors + "<br/><br/>");




// Q. 10. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

//              SOLUTION :c

// var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

// document.write("Cities List: " + cities + "<br/>");

// var copyCities = cities.slice(2,4);
// document.write("Slected Cities: " + copyCities);




// Q.11 Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

//              SOLUTION :

// var arr = ["This", "is", "my", "cat"];

// document.write("Array : " + arr + "<br/>");

// var singleString = arr.join(" ");
// document.write("String : " + singleString);




// Q.12. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

//              SOLUTION :

// var fifoArray = [];

// fifoArray.push("keyboard");
// fifoArray.push("mouse");
// fifoArray.push("printer");
// fifoArray.push("monitor");

// document.write("Device:<br/> "+ fifoArray + "<br/><br/>")

// document.write("Out:<br/>" + fifoArray.shift() + "<br/>");
// document.write("Out:<br/>" + fifoArray.shift() + "<br/>");
// document.write("Out:<br/>" + fifoArray.shift() + "<br/>");
// document.write("Out:<br/>" + fifoArray.shift() + "<br/>");




// Q.13. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

//              SOLUTION :

// var lifoArray = [];

// lifoArray.push("keyboard");
// lifoArray.push("mouse");
// lifoArray.push("printer");
// lifoArray.push("monitor");

// document.write("Devices:<br/> " + lifoArray + "<br/><br/>");

// document.write("Out:<br/>" + lifoArray.pop() + "<br/>");
// document.write("Out:<br/>" + lifoArray.pop() + "<br/>");
// document.write("Out:<br/>" + lifoArray.pop() + "<br/>");
// document.write("Out:<br/>" + lifoArray.pop() + "<br/>");



// Q. 14. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

//              SOLUTION :

// var phoneManufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<h3>Select a Phone Manufacture:</h3>");
// document.write("<select>");

// for (var i = 0; i < phoneManufactures.length; i++) {
//     document.write("<option>" + phoneManufactures[i] + "</option>");
// }

// document.write("</select>");
