//             FOR LOOPS

//         SYNTEX OF FOR LOOP  

// for (initialization; condition; increment/decrement) {
//     // body of loop (yeh code bar-bar chalega)
// }

//              EXAMPLE:

// for(var i = 1; i <= 5; i++){
//     console.log("Number: " + i);
    
// }


//              EXAMPLE:

// var fruits = ["Apple", "Banana", "Orange", "Grapes"];

// for(var i = 0; i < fruits.length; i++){
//     console.log("This is: " + fruits[i]);
    
// }

//              EXAMPLE:  (Backward Loop)

// for(var i = 5; i > 0; i--){
//     console.log(i);
    
// }


//              EXAMPLE:  

// var numbers = [10, 20, 30, 40, 50];
// var sum = 0;

// for(var i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// console.log("Total sum: " + sum);





//                ✅ Easy Level Questions:

// Q.1 Ek array fruits = ["Apple", "Mango", "Banana", "Orange"] banao.
// for loop use karke har fruit ko print karo.

// var fruit = ["Apple", "Mango", "Banana", "Orange"];

// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);   
// }




// Q.2 Ek array numbers = [1, 2, 3, 4, 5] banao.
// Loop use karke har number ko *2 karke print karo.

// var numbers = [1, 2, 3, 4, 5];

// for(var i = 0; i < numbers.length; i++){
//     var result = numbers[i] * 2;
//     console.log("Original: " + numbers + " | Double: " + result);
    
// }

// var numbers = [1, 2, 3, 4, 5];
// var doubleNumber = [];

// for(var i = 0; i < numbers.length; i++){
//     doubleNumber.push(numbers[i] * 2);
// }

// console.log("Original: " + numbers);
// console.log("Original: " + doubleNumber);



// Q.3 Ek array names = ["Ali", "Saad", "Jana"] banao.
// Loop se har naam ke sath " is a student" print karo.

// var names = ["Saad", "Ali", "Sabir"];

// for(var i = 0; i < names.length; i++){
//     console.log(names[i] + " is a student.");
    
// }



//                  ✅ Intermediate Level Questions:

// Q.1 Ek array scores = [10, 20, 30, 40, 50] banao.
// Loop use karke total sum calculate karo.

// var scores = [10, 20, 30, 40, 50];
// var sum = 0;

// for(var i = 0; i < scores.length; i++){
//     sum += scores[i];
// }

// console.log("Total sum: " + sum);




// Q.2 Ek array marks = [45, 67, 89, 34, 22, 90] banao.
// Loop use karke maximum number find karo.

// var marks = [45, 67, 89, 34, 22, 90];
// var max = marks[0];

// for(var i = 1; i < marks.length; i++){
//     if (marks[i] > max) {
//         max = marks[i];
//     }
// }

// console.log("Maximum marks = " + max);




// Q.3 Ek array numbers = [1, 2, 3, 4, 5, 6] banao.
// Loop use karke sirf even numbers print karo.

// var numbers = [1, 2, 3, 4, 5, 6];

// for(var i = 0; i < numbers.length; i ++){
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
        
//     }
// }




//                   ✅ Advance Level Questions:

// Q1.
// Ek array numbers = [2, 4, 6, 8, 10] banao.
// for loop use karke sabhi numbers ka sum aur average nikaalo.

// var numbers = [2, 4, 6, 8, 10];
// var sum = 0;

// for(var i = 0; i < numbers.length; i ++){
//     sum += numbers[i];
// }

// var average = sum / numbers.length;

// console.log("Sum = " + sum);
// console.log("Average = " + average);




// Q2.
// Ek array fruits = ["Apple", "Mango", "Banana", "Orange"] banao.
// Loop use karke check karo ke "Mango" array ke andar hai ya nahi.
// Agar hai → print "Mango found!"
// Agar nahi → print "Not found!"

// var fruits = ["Apple", "Mango", "Banana", "Orange"];
// var userFruits = prompt("Enter your fruit:");

// var isFound = false;

// for(var i = 0; i < fruits.length; i++){
//     if (fruits[i] === "Mango") {
//         isFound = true;
//         break;
//     }
// }

// if (isFound) {
//     console.log("Mango found!");
// } else {
//     console.log("Not found!");
    
// }




// Q.3 Ek array numbers = [1, 2, 3, 4, 5, 6] banao.
// Loop use karke ek new array banao jisme sirf odd numbers ho ([1, 3, 5]).

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var userNumber = +prompt("Enter your number between 1-9:");
// var oddNumber = [];

// for(var i = 0; i < numbers.length; i ++){
//     if (numbers[i] % 2 !== 0) {
//         oddNumber.push(numbers[i]);
//     }
// }

// console.log("Odd Number: " + userNumber);




// Q4.
// Ek array students = ["Ali", "Saad", "Babar", "Ahmed"] banao.
// Loop use karke har naam ko ek ek line me print karo aur sath me uska index number bhi dikhayo.

// var students = ["Ali", "Saad", "Babar", "Ahmed"];

// for (var i = 0; i < students.length; i++){
//     console.log(i + ": " + students[i]);
    
// }




// Q5.
// Ek array numbers = [5, 10, 15, 20, 25] banao.
// Loop use karke har number ko 2 se multiply karke ek new array banao.

// var numbers = [5, 10, 15, 20, 25];
// var doubleNumber = [];

// for (var i = 0; i < numbers.length; i ++){
//     doubleNumber.push(numbers[i] * 2);
// }

// console.log("Original:", numbers);
// console.log("Double:", doubleNumber);



//                 EXAMPLE:

// var cities = ["karachi", "lahore", "islamabad", "queeta", "peshawar", "gilgit"];
// var userCity = prompt("Enter your city name here:");
// var isFound = false;

// for (var i = 0; i < cities.length; i++){
//     if (userCity === "karachi") {
//         isFound = true;
//     }
//     break;
// }

// if (isFound) {
//     console.log("welcome to the city of " + userCity);
// } else {
//     console.log("You are outside from karachi");
    
// }





// Q1. Shopping Cart – Solution (Logic Building)
// Ek empty array cart = [] banao.
// Ek loop start karo jo bar-bar user se prompt le.
// User se pucho: "Enter an item (or type 'done' to finish):"
// Har bar jo user likhega:
// Agar input "done" ho → loop stop kar do.
// Agar input khali na ho → usko cart me add kar do.
// Jab loop end ho jaye, poora cart print kar do (jo bhi user ne add kiya).


// var cart = [];
// var userItems = +prompt("Enter how many number of items you want to add:");

// for (var i = 0; i < userItems; i ++) {
//     var item = prompt("Enter item " + (i + 1) + ":");
//     cart.push(item);
// }

// document.write("Your cart: " + cart)




// 2. Student Marks Average – Solution
// Ek empty array marks = [] banao.
// Loop chalao aur user se multiple marks input lo.
// Sare marks ka sum calculate karo.
// Average = sum / marks.length nikaalo.
// Condition:
// Agar average >= 50 → "Pass"
// Nahi to "Fail".

// var  marks = [];
// var totalStudents = +prompt("How many students marks you wanted to add?");
// var sum = 0;

// for(var i = 0; i < totalStudents; i ++){
//     var mark = +prompt("Enter marks of student: " + (i + 1) + ":");
//     marks.push(mark);
//     sum += mark;
// }

// var average = sum / totalStudents;

// console.log("Marks:", marks);
// console.log("Average:", average);

// if (average >= 50) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
    
// }




//  Q3. Username Availability Check – Solution
// Ek array users banao jisme kuch usernames stored ho.
// User se ek username input lo.
// Loop se check karo kya wo username array ke andar hai.
// Agar mil jaye → "Username already taken".
// Agar na mile → "Username available".

// var users = ["saad", "ali", "babar"];
// var newUser = prompt("Enter a username:");
// var isFound = false;

// for(var i = 0; i < users.length; i++){
//     if (users[i] === newUser) {
//         isFound = true;
//         break;
//     }
// }

// if (isFound) {
//     console.log("Username already taken");
// } else {
//     console.log("Username Available");
    
// }




// Q4. Favorite Numbers – Solution
// User se ek ek karke 5 numbers lo aur ek array me store karo.
// Loop use karke array ke numbers check karo.
// Condition:
// Agar number even ho (divisible by 2) → print karo.
// Agar odd ho → skip kar do.

// var numbers = [];

// for(var i = 0; i < 5; i++){
//     var num = +prompt("Enter number" + (i + 1) + ":");
//     numbers.push(num);
// }

// console.log("All Numbers: ", numbers);

// console.log("Even Numbers:");
// for(var j = 0; j < numbers.length; j++){
//     if (numbers[j] % 2 === 0) {
        
//         console.log(numbers[j]);
        
//     }
// }




//  Q5. Password Verification System – Solution
// Ek correctPassword set karo.
// User ko maximum 3 bar input dene do (loop 3 times chalega).
// Har bar:
// Agar user ka password correct hai → "Login Successful" aur loop ruk jaye.
// Agar galat hai → chances kam hote jayen.
// Agar 3 bar galat ho gaya → "Account Locked".

// var correctPassword = "12345";
// var isFound = false;

// for(var i = 0;  i < 3; i++){
//     var userPassword = prompt("Enter your password:");

//     if (userPassword === correctPassword) {
//         console.log("Login Successful");
//         isFound = true;
//         break;
//     } else {
//         console.log("Incorrect password, try again.");
        
//     }
// }

// if (!isFound) {
//     console.log("Account Locked");
// }




// Q1 (Shopping Website – Cart Total with User Input)
// User se poochho ke wo kitni items kharidna chahta hai.
// Phir loop use karke user se har item ka price prompt() se lo aur array mein store karo.
// End mein:
// Cart ka total calculate karo.
// Agar total >= 3000 ho to message show karo "You got free delivery!", warna "Delivery charges: 200".



// var numberOfItems = +prompt("Enter hoe many items you wanted to buy:");
// var cart = [];
// var total = 0;

// for(var i = 0; i < numberOfItems; i++){
//     var price = +prompt("Enter price of item " + (i + 1) + ":");
//     cart.push(price);
// }

// for(var j = 0; j < cart.length; j++){
//     total += cart[j];
// }

// if (total >= 3000) {
//     document.write("Your cart total is " + total + ". You got free delivery!");
// } else {
//     document.write("Your cart total is " + total + ". Delivery charges: 200");
// }




// Q2 (Student Portal – Result Checker with User Input)
// User se poochho ke kitne students ke marks enter karne hain.
// Phir loop mein har student ke marks prompt() se lo aur array mein store karo.
// End mein:
// Har student ka result print karo: "Pass" (marks ≥ 50) warna "Fail".
// Total pass aur fail count bhi show karo.


// var totalStudents = +prompt("Enter number of students:");
// var marks = [];

// for(var i = 0; i < totalStudents; i++){
//     var score = +prompt("Enter marks of student " + (i + 1) + ":");
//     marks.push(score);
// }

// var passCount = 0;
// var failCount = 0;

// for(var i = 0; i < marks.length; i ++){
//     if (marks[i] >= 50) {
//         document.write("Student " + (i + 1) + " scored " + marks[i] + " Pass <br/>");
//         passCount++;
//     } else {
//         document.write("Student " + (i + 1) + " scored " + marks[i] + " Fail <br/>");
//         failCount++;
//     }
// }

// document.write("<br/>Total Pass Students: " + passCount);
// document.write("<br/>Total Fail Students: " + failCount);





// Q3 (Hospital Management – Patient Queue with User Input)
// User se poochho ke kitne patients hain.
// Loop use karke patient ke names prompt() se lo aur array mein store karo.
// Har patient ko ek token number assign karo (1 se shuru).
// Agar patient ka naam "Jana" ho to usko VIP declare karo.


// var totalPatient = +prompt("How many patient you wanted to Register:");
// var patientName = [];

// for(var i = 0; i < totalPatient; i ++){
//     var names = prompt("Enter name of patient " + (i + 1) + ":");
//     patientName.push(names);
// }

// for (var i = 0; i < patientName.length; i ++){
//     var token = i + 1;
//     if (patientName[i] === "saad") {
//         document.write("Token " + token + " → " + patientName[i] + " (VIP Patient 🚨)<br>");
//     } else {
//         document.write("Token " + token + " → " + patientName[i] + "<br>");
//     }
// }

