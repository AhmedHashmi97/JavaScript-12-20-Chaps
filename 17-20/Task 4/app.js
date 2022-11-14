// Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user
var a = +(prompt("Enter a number to show its multiplication table"))
var b = +(prompt("Enter length of multiplication table"))
console.log("Mmultiplication table of: " + a + "\n")
document.write("Length: " + b + "\n")

function myTable() {
    for (var i = 1; i <= b; i++) {
        console.log(a + " x " + i + " = " + i * a + "\n")
    }
}
myTable();