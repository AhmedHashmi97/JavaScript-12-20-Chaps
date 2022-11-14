// Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

var queue = [24, 53, 78, 91, 12];

function largestNumber(queue) {
    document.write("Array items are: " + "[ " + queue + " ]")

    document.write("<br>" + "Largest number is: " + Math.max(24, 53, 78, 91, 12))
}
largestNumber(queue);