// var age = 20;
// console.log(age >= 18);
// console.log(age == 18);
// console.log(age === 18);

// var age = prompt("Enter your age", "18+");
// var city = prompt("Type your city", "karachi");

// if(age >= 18 && city === "karachi"){
//     console.log("You are adult lives in karachi");
// } else {
//     console.log("Condition not match");
// }

//   Easy Level Practice Sawalat

// Q1: Age Check
// Ek program banao jo user se age input le.
// Agar age 18 ya zyada ho to "You are an adult" print karo.
// Agar 18 se choti ho to "You are a minor" print karo.
//               SOLUTION

// var age =  prompt("Enter your Age");

// if (age >= 18) {
//     document.write("You are adult")
// } else {
//     document.write("You are minor")
// }

// Q2: Even or Odd
// Ek number input lo.
// Agar number 2 se divide ho jata hai to "Even number" print karo.
// Warna "Odd number" print karo.
//             SOLUTION

// var num = prompt("Enter a number here");

// if (num % 2 == 0) {
//     document.write("Even Number")
// } else {
//     document.write("Odd Number")
// }

// Question 3: Temperature Check
// Ek program banao jo user se temperature input le.
// Agar temperature > 30 ho to "It's hot outside" print karo.
// Agar temperature <= 30 ho to "It's cool outside" print karo.
//                 SOLUTION

// var temp = prompt("Enter a temprature:");

// if (temp > 30) {
//     document.write("It's hot outside")
// } else {
//     document.write("It's cool outside")
// }

// Q4: Simple Login System
// 2 variables banao: username = "admin" aur password = "1234".
// User se dono input lo.
// Agar dono sahi hain to "Login successful" print karo.
// Warna "Invalid username or password" print karo.
//                  SOLUTION

// var userName = prompt("Enter your user name:", "admin OR guest");
// var password = prompt("Enter password", "1234");

// if (userName === "admin" && password == "1234") {
//     document.write("Login successful");
// } else {
//     document.write("Invalid username or password");
// }

// Question 5: Grading System
// Ek program banao jo user se marks (0–100) input le.
// Agar marks >= 80 → "Grade A"
// Agar marks >= 60 → "Grade B"
// Agar marks >= 40 → "Grade C"
// Warna → "Fail"
//              SOLUTION

// var marks = prompt("Enter your marks");

// if (marks >= 80) {
//     document.write("Grade A");
// }else if (marks >= 60) {
//     document.write("Grade B");
// } else if (marks >= 50) {
//     document.write("Grade C");
// } else {
//     document.write("Fail");
// }

//              Medium Level Practice Sawalat

// Q1: Voting Eligibility
// User se age aur citizenship input lo.
// Agar age >= 18 aur citizenship "Pakistani" hai → "You are eligible to vote".
// Warna → "You are not eligible to vote".
//                 SOLUTION

// var age = prompt("Enter your age:", "18+");
// var citizenShip = prompt("Enter your country name:");

// if (age >= 18 && citizenShip === "pakistan") {
//     document.write("You are eligible to vote");
// } else {
//     document.write("You are not eligible to vote");
// }

// Question 2: Discount System
// User se shopping amount input lo.
// Agar amount >= 5000 → "20% discount"
// Agar amount >= 3000 aur < 5000 → "10% discount"
// Agar amount < 3000 → "No discount"
//               SOLUTION

// var amount = prompt("Enter your amount:" , "Upto 5k");

// if (amount >= 5000) {
//     document.write("20% dicount");
// } else if (amount >= 3000 && amount < 5000) {
//     document.write("10% dicount");
// } else {
//     document.write("No discount");
// }

// Question 3: Login with Multiple Users
// Ek system banao jisme do valid users hain:
// Username: "admin" Password: "1234"
// Username: "guest" Password: "0000"
// User se input lo:
// Agar user in dono me se kisi ek ka sahi pair input kare → "Login successful" print karo
// Warna → "Invalid login".
//               SOLUTION

// var userName = prompt("Enter user name:", "admin OR guest");
// var password = prompt("Enter your password:");

// if (
//   (userName === "admin" && password == "1234") ||
//   (userName === "guest" && password == "0000")
// ) {
//   document.write("→ Login successful");
// } else {
//   document.write("→ Invalid login");
// }

// Q4: Weekend or Weekday
// User se ek din ka naam input lo (e.g. "Monday").
// Agar din "Saturday" ya "Sunday" hai → "It's weekend".
// Warna → "It's a weekday".
//              SOLUTION

// var day = prompt("Type your Day:");

// if (day === "saturday" || day === "sunday") {
//     document.write("It's weekend");
// } else {
//     document.write("It's weekday");
// }

// Q5: Grade + Pass/Fail
// User se marks input lo.
// Agar marks >= 50 → "Pass" + saath me grade bhi show ho (A, B, C).
// Agar marks < 50 → "Fail".
//            SOLUTION

// var marks = prompt("Enter your marks:");

// if (marks >= 80) {
//     document.write("Pass Grade A");
// } else if (marks >= 70) {
//     document.write("Pass Grade B");
// } else if (marks >= 60) {
//     document.write("Pass Grade C");
// } else {
//     document.write("Fail");
// }

//         🔥 Advanced Level If-Else Questions

// Q1. User se age aur nationality lo.
// Agar age ≥ 18 aur nationality "Pakistani" hai → "Eligible for CNIC" print karo.
// Agar age < 18 → "Not eligible for CNIC" print karo.
// Agar nationality Pakistani nahi hai → "Only for Pakistanis" print karo.
//                       SOLUTION

// var age = prompt("Enter your Age:" , "18 OR Above");
// var nationality = prompt("Type your country name").toLowerCase();

// if (age >= 18 && nationality === "pakistan") {
//     document.write("✅ Eligible for CNIC");
// } else if (age < 18) {
//     document.write("❌ Not eligible for CNIC (under 18)")
// }  else {
//     document.write("❌ Only for Pakistanis");
// }

// Q2. User se username aur password lo.
// Agar username = "admin" aur password = "12345" → "Login Successful" print karo.
// Agar username sahi hai lekin password ghalat hai → "Incorrect Password" print karo.
// Agar username hi ghalat hai → "Invalid User" print karo.
//                    SOLUTION

// var userName = prompt("Enter your user Name", "admin OR Guest");
// var password = prompt("Type your password", "Hint : Intial 5 numbers");

// if (userName === "admin" && password === "12345") {
//     document.write("→ Login Successful");
// } else if (userName === "admin" && password !== "12345") {
//     document.write("→ Incorrect Password");
// } else {
//     document.write("→ Invalid User");
// }

// Q3. Ek calculator banao jo user se do numbers aur ek operator (+ - * /) lega.
// Agar operator + ho to dono ka sum print karo.
// Agar operator - ho to subtraction print karo.
// Agar operator * ho to multiplication print karo.
// Agar operator / ho to division print karo.
// Agar koi aur operator ho to "Invalid operator" print karo.
//                        SOLUTION

// var num1 = +prompt("Type your first number");
// var num2 = +prompt("Type your second number");
// var opt = prompt("Enter an operator", "+ , - , *, /");

// if (opt === "+") {
//     document.write(num1 + num2);
// } else if (opt === "-") {
//     document.write(num1 - num2);
// } else if (opt === "*") {
//     document.write(num1 * num2);
// } else if (opt === "/") {
//     if (num2 === 0) {
//         document.write("Error: Division by zero not allowed");
//     } else {
//         document.write(num1 / num2);
//     }
// } else {
//     document.write("Invalid operator");
// }


// Q4. Student grading system banao jahan marks (0-100) input hoga:
// 90–100 → Grade A+
// 80–89 → Grade A
// 70–79 → Grade B
// 60–69 → Grade C
// 50–59 → Grade D
// <50 → Fail

// var marks = +prompt("Enter your marks (0-100):")

// if (marks >= 90 && marks <= 100) {
//     document.write("Grade: A");
// } else if (marks >= 80 && marks <= 89) {
//     document.write("Grade: B");
// } else if (marks >= 70 && marks <= 79) {
//     document.write("Grade: C");
// } else if (marks >= 60 && marks <= 69) {
//     document.write("Grade: D");
// } else if (marks <= 59 && marks >= 0) {
//     document.write("Grade: Fail");
// } else {
//     document.write("Invalid Marks! Please enter between 0 - 100");
// }