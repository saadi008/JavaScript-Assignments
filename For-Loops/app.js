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































//  Q3. Username Availability Check – Solution
// Ek array users banao jisme kuch usernames stored ho.
// User se ek username input lo.
// Loop se check karo kya wo username array ke andar hai.
// Agar mil jaye → "Username already taken".
// Agar na mile → "Username available".




















// Q4. Favorite Numbers – Solution
// User se ek ek karke 5 numbers lo aur ek array me store karo.
// Loop use karke array ke numbers check karo.
// Condition:
// Agar number even ho (divisible by 2) → print karo.
// Agar odd ho → skip kar do.























//  Q5. Password Verification System – Solution
// Ek correctPassword set karo.
// User ko maximum 3 bar input dene do (loop 3 times chalega).
// Har bar:
// Agar user ka password correct hai → "Login Successful" aur loop ruk jaye.
// Agar galat hai → chances kam hote jayen.
// Agar 3 bar galat ho gaya → "Account Locked".