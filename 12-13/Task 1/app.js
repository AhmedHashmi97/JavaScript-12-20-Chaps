// Q. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

var inp = prompt("Enter a Character: ")
if (inp >= 0) {
    document.write("Input Value " + inp + " is a Number")
} else if (inp == inp.toUpperCase()) {
    document.write("<br>" + "Input value " + inp + " is an UpperCase")
} else if (inp == inp.toLowerCase()) {
    document.write("<br>" + "Input value " + inp + " is a LowerCase")
} else {
    document.write("<br>" + "Invalid Entry!")
}