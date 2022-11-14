// Q. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var intOne = +prompt("Enter a first Integer: ")
var intTwo = +prompt("Enter a Second Integer: ")

function comInt() {
    if (intOne >= intTwo) {
        document.write(intOne + " is greater than " + intTwo)

    } else if (intOne <= intTwo) {
        document.write(intOne + " is lesser than " + intTwo)

    } else if (intOne == intTwo) {
        document.write(intOne + " is equal to " + intTwo)

    } else {
        document.write("Invalid Entry !")

    }

}
comInt();