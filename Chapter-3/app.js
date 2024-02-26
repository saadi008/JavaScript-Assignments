
// Q) 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = ("20 year Old.")
alert("My age is " + age)


/* Q) 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */


// Check if the number of visits is stored in sessionStorage
var numberOfVisits = sessionStorage.getItem('visits');

// If the number of visits is not stored, initialize it to 0
if (!numberOfVisits) {
    numberOfVisits = 0;
}

// Increment the number of visits
numberOfVisits++;

// Store the updated number of visits in sessionStorage
sessionStorage.setItem('visits', numberOfVisits);

// Display the number of visits using alert
alert("You have visited this site " + numberOfVisits + " times.");





