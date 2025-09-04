//                           MATH EXPRESSIONS

// Q. 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

//                  SOLUTION :

// var a = 10;
// document.write("<h2>Result :</h2> <br/> The vlaue of a is :" + a + "<br/>" + ".................................." + "<br/> <br/>");

// document.write("The value of ++a is :" + (++a) + "<br/>");
// document.write("Now the value of a is :" + a + "<br/><br/>");

// document.write("The value of a++ is :" + (a++) + "<br/>");
// document.write("Now the value of a is :" + a + "<br/><br/>");

// document.write("The value of --a is :" + (--a) + "<br/>");
// document.write("Now the value of a is :" + a + "<br/><br/>");


// document.write("The value of --a is :" + (a--) + "<br/>");
// document.write("Now the value of a is :" + a + "<br/><br/>");




// Q.2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;                                 2-1 = 1
// --a - --b;                           1-0 = 1                     
// --a - --b + ++b;                     1-0+1 = 2 
// --a - --b + ++b + b--;               1-0+1=1 =3

//                  SOLUTION :

// var a = 2, b =1;
// var result = --a - --b + ++b + b--;

// document.write("a = " + a + "<br/>");
// document.write("b = " + b + "<br/>");
// document.write("Result = " + result);




// Q. 3. Write a program that takes input a name from user & greet the user.

//                  SOLUTION :

// var userName = prompt("Enter your name"); 
// document.write("Welcome " + userName + " to JavaScript!");




// Q. 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

//                  SOLUTION :

// var num = prompt("Enter a number for Miltiplication table:" , "5");

// if (num === null || num === "") {
//     num = 5;
// }
// document.write("Miltiplication table of " + num + "<br/><br/>");

// for(var i = 1; i <= 10; i++){
//     document.write(num + " X " + i + " = " + (num * i) + "<br/>");
// }




// Q.5 Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

//                  SOLUTION :

var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarks = 100;

var sub1Marks = +prompt("Enter obtained marks for " +  sub1 + ":");
var sub2Marks = +prompt("Enter obtained marks for " +  sub2 + ":");
var sub3Marks = +prompt("Enter obtained marks for " +  sub3 + ":");

var totalObtainedMarks = sub1Marks + sub2Marks + sub3Marks;
var grandTotal = totalMarks * 3;
var percentage = (totalObtainedMarks / grandTotal) * 100;


document.write("<table id='resultTable'>");
document.write("<caption style='caption-side: top; font-size:20px; font-weight:bold; color:#4CAF50; padding:10px;'>📊 ResultMatrix</caption>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + sub1Marks + "</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + sub2Marks + "</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + sub3Marks + "</td></tr>");
document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");









