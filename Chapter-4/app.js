// Q)1. Declare 3 variables in one statement.

var variable1, variable2, variable3;
variable1 = "This is my first variable";
variable2 = "This is my second variable";
variable3 = "This is my third variable";
alert(variable1 + "\n" + variable2 + "\n" + variable3);

// Q)2. Declare 5 legal & 5 illegal variable names.

//Legal variable names:

var myVariable = ("1. myVariable")
var firstName = ("2. firstName")
var numberOfApples = ("3. numberOfApples")
var _score = ("4. _score")
var camelCaseVariable = ("5. camelCaseVariable")

//Illegal variable names:

var illegal1 = ("1. 123variable.")
var illegal2 = ("2. my-variable.")
var illegal3 = ("3. var.")
var illega4 = ("4. my variabl.")
var illegal5 = ("5. my_variable@")

var message = ("Legal variable names: " + "\n" + myVariable + "\n" + firstName + "\n" + numberOfApples + "\n"
    + _score + "\n" + camelCaseVariable + "\n" + "Illegal variable names: " + "\n" + illegal1 + "\n" + illegal2 + "\n" +
    illegal3 + "\n" + illega4 + "\n" + illegal5)
alert(message)

/*Q)3 Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________ */

document.write("<h1>A) Rules for naming JS variables</h1>");
document.write ("B) Variable names can only contain number $ and _  For example $my_1stVariable" + "<br>")
document.write ("C)Variables must begin with a letters, $ or _.  For example $name, _name or name " + "<br>")
document.write("D) Variable names are case sensitive" + "<br>")
document.write("E) Variable names should not be JS keywords " + "<br>")




