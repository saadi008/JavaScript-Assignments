// console.log("JavaScript connected!");


// var  text = "hello world";
// console.log(text.toUpperCase());

// var text = "SAAD ALI";
// console.log(text.toLowerCase());


//         Practice Questions (Changing Case)

// 1. Ek program likho jo user se koi sentence le aur use uppercase mein print kare.

// var input = prompt("Type your sentence.").toUpperCase();
// console.log(input);


// 2. Ek program likho jo user se koi word le aur use lowercase mein print kare.

// var word = prompt("Type your any word.").toLowerCase();
// console.log(word);


// 3. Ek program likho jo user ka naam le aur use format kare:
// Pehla naam (first name) uppercase mein
// Last name lowercase mein

// var fullName = prompt("Type your full name:");
// var parts = fullName.split(" ");

// var firstName = parts[0].toUpperCase();
// var middleName = parts[1].toLowerCase();
// var lastName = parts[2].toLowerCase();

// console.log(firstName + " " + middleName + " " + lastName);


// 4. Ek program likho jo ek string le aur check kare ke wo uppercase mein hai ya lowercase mein. (Hint: compare original string with .toUpperCase() and .toLowerCase() versions).

// var text = prompt("Type any text:");

// if (text === text.toUpperCase()) {
//     console.log("The text is UPPERCASE.");
// } else if (text === text.toLowerCase()) {
//     console.log("The text is lowercase.");
// } else {
//     console.log("The text is mixed case");

// }


// 5. Ek program likho jo ek sentence le aur har word ka first letter uppercase aur baaki lowercase kare (Title Case).

// var sentence = prompt("Type your sentence:");
// var words = sentence.split(" ");
// var titleCaseWords = [];

// for (var i = 0; i < words.length; i ++) {
//     var word = words[i];
//     var titleWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     titleCaseWords.push(titleWord);
// }

// var result = titleCaseWords.join(" ");
// console.log(result);

// 6. Ek program likho jo ek sentence le aur usme jitne bhi uppercase characters hain unki counting kare.

// var sentence = prompt("Type a sentence:");
// var upperCount =  0;
// var lowerCount =  0;

// for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//     if (char >= "A" && char <= "Z") {
//         upperCount++;
//     } else if (char >= "a" && char <= "z") {
//         lowerCount++;
//     }
// }

// console.log("Total Uppercase Letters: " + upperCount);
// console.log("Total Lowercase Letters: " + lowerCount);




//                       New Practice Questions (Advanced Level)

// 1. Ek program likho jo user ka poora sentence le aur har dusre word ko uppercase aur baaki words ko lowercase mein print kare.
// Input: "JavaScript is fun to learn"
// Output: "JAVASCRIPT is FUN to LEARN"

// var sentence = prompt("Type Your Sentence:");
// var words = sentence.split(" ");
// var result = [];

// for (var i = 0; i < words.length; i++) {
//     if (i % 2 === 0) {
//         result.push(words[i].toLowerCase());
//     } else {
//         result.push(words[i].toUpperCase());
//     }
// }

// console.log(result.join());




// 2. Ek program likho jo ek sentence le aur usme jitne bhi vowels hain unhe uppercase mein aur baaki letters lowercase mein print kare.
// Input: "hello world"
// Output: "hEllO wOrld"


// var sentence = prompt("Type your sentence:").toLowerCase();
// var result = "";

// for (var i = 0; i < sentence.length; i++) {
//     var char = sentence[i];
//     if ("aeiou".includes(char)) {
//         result += char.toUpperCase();
//     } else {
//         result += char;
//     }
// }

// console.log(result);




// 3. Ek program likho jo ek word le aur check kare ke wo palindrome hai ya nahi (case-insensitive).
// Example: "Level" → Palindrome ✅
// Example: "Hello" → Not Palindrome ❌


// var word = prompt("Enter a word:");
// var lowerWord = word.toLowerCase();

// var reversed = lowerWord.split("").reverse().join("");

// if (lowerWord === reversed) {
//     console.log(word + " is a Palindrom");
// } else {
//     console.log(word + " is NOT Palindrom");

// }




// 4. Ek program likho jo user ka naam le aur uske initials (sirf first letters) uppercase mein print kare.
// Input: "Muhammad Saad Ali"
// Output: "MSA"


// var fullName = prompt("Type your full name:");
// var words = fullName.split(" ");
// var initials = "";

// for (var i = 0; i < words.length; i++) {
//     initials += words[i].charAt(0).toUpperCase();
// }

// console.log("Initials: " + initials);




// 5. Ek program likho jo ek paragraph le aur har sentence ka pehla letter uppercase kare (baaki letters lowercase).

var paragraph = prompt("Enter a paragraph:").toLowerCase();
var sentences = paragraph.split(".");
var result = [];

for (var i = 0; i < sentences.length; i++) {
      var sentence = sentences[i].trim();
       if (sentence.length > 0) {
        var newSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        result.push(newSentence);
       }
}

console.log(result.join(".") + ".");

