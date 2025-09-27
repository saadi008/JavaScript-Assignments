//                      ARRAYS AND LOOP
//                     Assignment # 17-20

// Q.1 Declare and initialize an empty multidimensional array.
// (Array of arrays)

//                   SOLUTION:

// var multiArray = [
//     [],[],[]
// ];
// console.log(multiArray);




// Q.2 Declare and initialize a multidimensional array
// representing the following matrix:

//                   SOLUTION:

// var matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// console.log(matrix);




// Q.3 Write a program to print numeric counting from 1 to 10.

//                   SOLUTION:

// for (var i = 1; i <= 10; i++) {
//     console.log(i);

// }




// Q.4 Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

//                   SOLUTION:

// var tableNumber = +prompt("Enter the number for multiplication table:");
// var tableLength = +prompt("Enter the length of the table:");

// for (var i = 1; i <= tableLength; i++) {

//     console.log(tableNumber + " X " + i + " = " + (tableNumber * i));

// }




// Q.5 Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

//                   SOLUTION:

// var fruits = ["apple", "banana", "mango", "orange", "strawbery"];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (var j = 0; j < fruits.length; j++) {
//     console.log("Element at index " + j + " is " + fruits[j]);

// }




// Q.6 Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//                   SOLUTION:

// var counting = "";
// for (var i = 1; i <= 15; i++) {
//     counting += i + ", ";
// }
// console.log("Counting: " + counting);


// var reverse = "";
// for (var i = 10; i >= 1; i--) {
//     reverse += i + ", ";
// }
// console.log("Reverse Counting: " + reverse);


// var even = "";
// for (var i = 0; i <= 20; i += 2) {
//     even += i + ", ";
// }
// console.log("Even: " + even);


// var odd = "";
// for (var i = 1; i <= 19; i += 2) {
//     odd += i + ", ";
// }
// console.log("Odd: " + odd);


// var series = "";
// for (var i = 2; i <= 20; i += 2) {
//     series += i + "k, ";
// }
// console.log("Series: " + series);





// Q.7 You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

//                   SOLUTION:

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to SAADI BAKERY. What do you want to order Sir/ma'am?");
// var isFound = false;

// for (var i = 0; i < items.length; i++) {
//     if (items[i].toLowerCase() === userInput.toLowerCase()) {
//         console.log(userInput + " is available at index " + i + " in our bakery.");
//         isFound = true;
//         break;
//     }
// }

// if (!isFound) {
//     console.log("We are sorry " + userInput + " is not available in our bakery.");

// }




// Q.8 Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

//                   SOLUTION:

// var A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 0; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("The largest number is: " + largest);




// Q. 9. Write a program to identify the smallest number in the given array.

//                   SOLUTION:

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (var i = 0; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number is: " + smallest);




// Q.10 Write a program to print multiples of 5 ranging 1 to 100.

//                   SOLUTION:

// var ranging = "";

// for (var i = 5; i <= 100; i += 5) {
//     ranging += i + ", ";
// }
// console.log(ranging);


