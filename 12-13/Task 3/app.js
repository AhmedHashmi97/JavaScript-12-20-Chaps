// Q. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

var checkInp = +prompt("Enter a Number: ");

function checkNum() {
    if (checkInp > 0) {
        document.write("Input Number " + checkInp + " is positive")
    } else if (checkInp < 0) {
        document.write("Input Number " + checkInp + " is negative")
    } else if (checkInp == 0) {
        document.write("Input Number" + " is 0")
    } else {
        document.write("Invalid Entry! ")
    }


}
checkNum();