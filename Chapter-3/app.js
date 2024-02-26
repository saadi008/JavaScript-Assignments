// Q) 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = "20 year Old.";
alert("My age is " + age);

/* Q) 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */

// Check if the number of visits is stored in sessionStorage
var numberOfVisits = sessionStorage.getItem("visits");

// If the number of visits is not stored, initialize it to 0
if (!numberOfVisits) {
  numberOfVisits = 0;
}

// Increment the number of visits
numberOfVisits++;

// Store the updated number of visits in sessionStorage
sessionStorage.setItem("visits", numberOfVisits);

// Display the number of visits using alert
alert("You have visited this site " + numberOfVisits + " times.");

// Q) 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// Declare a variable called birthYear and assign your birth year to it
var birthYear = 2003;

// Display a message in the browser with your birth year
alert("My birth year is: " + birthYear);

// Display the message on the web page
document.write(
  "My birth year is: " +
    birthYear +
    "<br>" +
    "Data type of my declared variable is number" +
    "<br>"
);

/* Q)4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”. */

// Visitor's information
var visitorsName = "Saad Ali";
var productTitle = "Polo-Shirt";
var quantity = 5;

var message =
  visitorsName +
  " Orderd " +
  quantity +
  " " +
  productTitle +
  " (s) on Addidas Clothing store.";
document.write(message);
