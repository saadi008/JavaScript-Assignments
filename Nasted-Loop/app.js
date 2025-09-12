//             NASTED LOOP & ARRAY




// var students = [
//     ["Ali", [85, 90, 78]],
//     ["Saad", [92, 88, 95]],
//     ["Babar", [70, 65, 80]]
// ];

// for (let i = 0; i < students.length; i++) {
//     console.log("Student: " + students[i][0]);

//     let total = 0;
//     for (let j = 0; j < students[i][1].length; j++) {
//         total += students[i][1][j];
//         console.log("   Subject " + (j + 1) + ": " + students[i][1][j]);
//     }

//     let avg = total / students[i][1].length;
//     console.log("   Average: " + avg.toFixed(2));
//     console.log("------------------------");
// }





// for (var i = 2; i <= 5; i++){
//     console.log("Table of " + i);

//     for (var j = 1; j <=5; j++){
//         console.log(i + " X " + j + " = " + (i * j));
//     }

//     console.log("----------------");

// }





// var seats  = [
//     ["A1", "A2", "A3"],
//     ["B1", "B2", "B3"],
//     ["C1", "C2", "C3"],
// ];

// for (var i = 0; i < seats.length; i++){

//     for (var j = 0; j < seats[i].length; j++){
//         console.log("Seat: " + seats[i][j]);
//     }
// }





// var menu = [
//     ["Starters", ["Soup", "Salad", "Fries"]],
//     ["Main Course", ["Biryani", "Pizza", "Burger"]],
//     ["Drinks", ["Coke", "Juice", "Water"]]
// ];

// for (var i = 0; i < menu.length; i++){
//     console.log("Category: " + menu[i][0]);

//     for (var j = 0; j < menu[i][1].length; j++){
//         console.log("  Item: " + menu[i][1][j]);
//     }
//     console.log("--------------------");

// }





// var students = [
//     ["Ali", [85, 90, 78]],
//     ["Saad", [92, 88, 95]],
//     ["Ahmed", [45, 55, 60]]
// ];

// let topperName = "";
// let topperAvg = 0;


// for (var i = 0; i < students.length; i++) {
//     console.log("Student: " + students[i][0]);

//     var total = 0;
//     for (var j = 0; j < students[i][1].length; j++) {
//         total += students[i][1][j];
//     }

//     console.log(" Marks: " + students[i][1].join(", "));
//     console.log(" Total: " + total);

//     var avg = total / students[i][1].length;
//     console.log(" Average: " + avg.toFixed(2));

//     var grade;
//     if (avg >= 90) grade = "A+";
//     else if (avg >= 80) grade = "A";
//     else if (avg >= 70) grade = "B";
//     else if (avg >= 60) grade = "C";
//     else if (avg >= 50) grade = "D";
//     else grade = "Fail";

//     console.log(" Grade: " + grade);
//     console.log("-----------------");

//     if (avg > topperAvg) {
//         topperAvg = avg;
//         topperName = students[i][0];
//     }
// }

// console.log(" Class Topper: " + topperName + " with Average " + topperAvg.toFixed(2));





// Practice Questions on Nested Arrays & Nested Loops
// Q1. Tumhare paas ek nested array hai jo students ke marks rakhta hai:
// Har student ke total marks calculate karo aur print karo.

// var marks = [
//     [80, 75, 90],
//     [60, 70, 85],
//     [95, 88, 92]
// ];

// for (var i = 0; i < marks.length; i++) {

//     var total = 0;
//     for (var j = 0; j < marks[i].length; j++) {
//         total += marks[i][j]
//     }
//     console.log("Student " + (i + 1) + " ka total marks " + total);

// }




// Q2. Tumhare paas ek nested array hai jo ek matrix represent karta hai:
// Har row ke elements ko print karo alag line mein (row-wise output).


// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (var i = 0; i < matrix.length; i++) {

//     var row = "";
//     for (var j = 0; j < matrix[i].length; j++) {

//         row += matrix[i][j];
//     }
//     console.log(row);
// }





// Q3. Ek shopping cart ka nested array diya gaya hai:
// Har fruit ka naam aur uski quantity print karo.


// var cart = [
//     ["Apple", 3],
//     ["Banana", 2],
//     ["Mango", 5]
// ];

// for (var i = 0; i < cart.length; i++){

//     var fruit = cart[i][0];
//     var quantity = cart[i][1];

//     console.log("Fruit: " + fruit + ", Quantity: " + quantity);
// }




// Q4. Tumhare paas ek 2D array hai jo cricket players ke runs rakhta hai:
// Har player ka average score calculate karke print karo.

// var runs = [
//     ["Babar", [50, 45, 70]],
//     ["Rizwan", [40, 60, 55]],
//     ["Shaheen", [15, 20, 10]]
// ];


// for (var i = 0; i < runs.length; i++) {

//     var player = runs[i][0];
//     var score = runs[i][1];
//     var total = 0;

//     for (var j = 0; j < score.length; j++) {
//         total += score[j];
//     }

//     var average = total / score.length;
//     console.log(player + " ka average: " + average.toFixed(2));

// }





// Q5. Ek 2D array diya hai jo ek class timetable ko represent karta hai:
// Har row ko print karo taake pata chale ke us din kaunse subjects hain.

// var timetable = [
//     ["Math", "English", "Science"],
//     ["History", "Urdu", "Computer"],
//     ["Physics", "Chemistry", "Biology"]
// ];


// for (var i = 0; i < timetable.length; i++) {

//     var row = "Day " + (i + 1) + ": ";

//     for (var j = 0; j < timetable[i].length; j++) {
//         row += timetable[i][j] + " ";
//     }
//     console.log(row);
// }