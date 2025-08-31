// Q. 1.  Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

//               SOLUTION

// var num1 = +prompt("Type your first number");
// var num2 = +prompt("Type your second number");
// var numResult = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + numResult);



// Q. 2. Repeat task1 for subtraction, multiplication, division & modulus.

//               SOLUTION (subtraction)

// var num1 = +prompt("Type your first number for subtraction");
// var num2 = +prompt("Type your second number for subtraction");
// var numResult = num1 - num2;
// document.write("Subtract of " + num2 + " from " + num1 + " is " + numResult);



//               SOLUTION (multiplication)

// var num1 = +prompt("Type your first number for multiplication");
// var num2 = +prompt("Type your second number for multiplication");
// var numResult = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + numResult);


//               SOLUTION (division)

// var num1 = +prompt("Type your first number for Division :");
// var num2 = +prompt("Type your second number for Division :");
// var numResult = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + numResult);


//               SOLUTION (modulus)

// var num1 = +prompt("Type your first number for Modulus :");
// var num2 = +prompt("Type your second number for Modulus :");
// var numResult = num1 % num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + numResult);
// console.log(typeof num1);



// Q. 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

//               SOLUTION

// var myVar;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

//               SOLUTION

// document.write("Value after variable declaration is : " + myVar + "<br/>");

// c. Initialize the variable with some number

//               SOLUTION

// myVar = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.

//               SOLUTION

// document.write("Initial value : " + myVar + "<br/>");

// e. Increment the variable.

//               SOLUTION

// myVar++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.

//               SOLUTION

// document.write("Value after increment is : " + myVar + "<br/>");

// g. Add 7 to the variable.

//               SOLUTION

// myVar = myVar + 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.

//               SOLUTION

// document.write("Value after addition is: " + myVar + "<br/>");

// i. Decrement the variable.

//               SOLUTION

// myVar--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

//               SOLUTION

// document.write("Value after decrement is: " + myVar + "<br/>");

// k. Show the remainder after dividing the variable’s value by 3.

//               SOLUTION

// var remider = myVar % 3;

// l. Output : “The remainder is : 0”.

//               SOLUTION

// document.write("The remainder is : " + remider + "<br/>");



// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

//               SOLUTION

// var ticketPrice = 600;
// var totalPrice = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalPrice + "PKR");



// Q. 5. Write a script to display multiplication table of any number in your browser.

//               SOLUTION

// var tableNumber = prompt("Enter a number to print a table :");
// document.write("<h3>Multiplication table of " + tableNumber + "</h3>");
// for (var i = 1; i <= 9; i++) {
// document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br/>");
// }



// Q. 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

//               SOLUTION

// var celsiusTemp = 25;
// var farenHeit = (celsiusTemp * 9/5) + 32;
// document.write(celsiusTemp + "°C is " + farenHeit + "°F <br>");

// var farenHeitTemp = 70;
// var celsiusResult = (farenHeitTemp - 32) * 5/9;
// document.write(farenHeitTemp + "°F is " + celsiusResult + "°C");



// Q. 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

//               SOLUTION

// var priceItem1 = 650;
// var priceItem2 = 100;

// var quantityItem1 = prompt("Enter quantity of order 1 : (Price : 650)");
// var quantityItem2 = prompt("Enter quantity of order 2 : (Price : 100)");

// var shippingCharges = 100;

// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// document.write("<h2>Shopping Cart</h2>");
// document.write("Price of item 1 is " + priceItem1 + "<br/>");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br/>");
// document.write("Price of item 2 is " + priceItem2 + "<br/>");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br/>");
// document.write("Shippig charges " + shippingCharges + "<br/>");
// document.write("Total cost of your order is " + totalCost + " PKR");



// Q.8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

//               SOLUTION

// var totalMarks = +prompt("Enter your total marks :");
// var obtainedMarks = +prompt("Enter your obtained marks :");
// var totalResult = obtainedMarks / totalMarks * 100;

// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + totalResult + "%");



// Q. 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

//               SOLUTION

// var dollar = 10;
// var saudiRiyals = 25;

// var dollarToPkr = 281;
// var SarToPkr = 75.09;
// var totalPkr = (dollar * dollarToPkr) + (saudiRiyals * SarToPkr);

// document.write("<h2>Currency in PKR</h2>");
// document.write("Total currency in PKR is " + totalPkr);



// Q. 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

//               SOLUTION

// var num = 5;
// var result = ((num +5) * 10) / 2;

// document.write("Initial number is : " + num + "<br/>");
// document.write("Result after calculation is : " + result);



// Q. 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

//               SOLUTION

// var currentYear = prompt("Enter your current Age year :");
// var birthYear = prompt("Enter your birth Age year :");

// var age = currentYear - birthYear;

// document.write("<h2>Age Calculator</h2>");
// document.write("Current Year " + currentYear + "<br/>");
// document.write("Birth Year " + birthYear + "<br/>");
// document.write("You are " + age + " years old.");



// Q. 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

//               SOLUTION

// var radius = 20;
// var pi = 3.142;

// var circumFerence = 2 * pi * radius;
// var area = pi * radius * radius;

// document.write("<h2>The Geometrizer</h2>");
// document.write("Radius of circle : " + radius + "<br/>");
// document.write("The circumference is : " + circumFerence + "<br/>");
// document.write("The area is : " + area);



// Q. 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

//               SOLUTION

// var fvrtSnack = prompt("Type your favourite SNACK name :");
// var currentAge = +prompt("Enter your current Age number:");
// var maxAge = +prompt("Enter your maximum expected Age number :");
// var fvrtSnackCount = +prompt("How many number of snack would you eat per day :");

// var ageRemaining = maxAge - currentAge;
// var calculateSnack = ageRemaining * 365 * fvrtSnackCount;

// document.write("<h2>The Lifetime Supply Calculator</h2>");
// document.write("Favourite Snack: " + fvrtSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount per day: " + fvrtSnackCount + "<br>");
// document.write("You will need " + calculateSnack + " " + fvrtSnack + " to last you until the ripe old age of " + maxAge + " . ");





















