// Q. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your browser


var color = ['Yellow', 'Pink', 'Red', 'Blue', 'Black'];
document.write("Array:" + "[" + color + "]")
var inp = alert("Hi! You've to enter any 5 colors just make sure that each color will be different from the other(s)");
var a = prompt("Enter your color: ")
var b = prompt("Enter your color: ")
var c = prompt("Enter your color: ")
var d = prompt("Enter your color: ")
var e = prompt("Enter your color: ")
var colors = [a, b, c, d, e];
document.write("<br>" + "Updated Colors:" + "[" + colors + "]")

var f = prompt("Add a color to the end of an Array: ")

colors.push(f);
document.write("<br>" + "Now the Array becomes after adding an element to an end: " + "[ " + colors + " ]")

var g = alert("delete first color from the array")
colors.shift();
document.write("<br>" + "Now the Array Becomes after deleting first element : " + "[" + colors + "]")

var h = alert("Delete last element of an Array: ")
colors.pop();
document.write("<br>" + "Array after removing last element: " + "[ " + colors + " ]")

var i = prompt("Add a color to an array:")
var j = +prompt("Input an Index number to which you want your color to be inserted: " + "\n" + "Insert between 0-3")
if (j == 0) {
    colors.splice(0, 1, i);
    document.write("<br>" + "After adding your color to your desired position: " + "[" + colors + "]")


} else if (j == 1) {
    colors.splice(1, 1, i);
    document.write("<br>" + "After adding your color to your desired position: " + "[" + colors + "]")
} else if (j == 2) {
    colors.splice(2, 1, i);
    document.write("<br>" + "After adding your color to your desired position: " + "[" + colors + "]")
} else if (j == 3) {
    colors.splice(3, 1, i);
    document.write("<br>" + "After adding your color to your desired position: " + "[" + colors + "]")
} else {
    alert("Sorry! You've crossed the index limit")
}

//var k = prompt("Which color do you want to delete from your created Array: ")
var l = +prompt("Enter Inder Number from which you want to delete: " + "\n" + "Array have 3 indexed from 0" + "\n" + "4 elements can be remove from 0 index" + "\n" + "3 elements can be remove from index 1" + "\n" + "Only 2 elements can be remove from index 2" + "\n" + "Only 1 element can be remove from index 3")
var m = +prompt("Enter Quantity of elements that you want to remove from Array:")
if (l == 0 && m == 1) {
    colors.splice(0, 1);
    document.write("<br>" + "After Removing an element from index 0: " + "[ " + colors + " ]")

} else if (l == 0 && m == 2) {
    colors.splice(0, 2);
    document.write("<br>" + "After Removing two elements from index 0: " + "[ " + colors + " ]")

} else if (l == 0 && m == 3) {
    colors.splice(0, 3);
    document.write("<br>" + "After Removing three elements from index 0: " + "[ " + colors + " ]")

} else if (l == 0 && m == 4) {
    colors.splice(0, 4);
    document.write("<br>" + "After Removing four elements from index 0: " + "[ " + colors + " ]")

} else if (l == 1 && m == 1) {
    colors.splice(1, 1);
    document.write("<br>" + "After Removing an element from index 1: " + "[ " + colors + " ]")

} else if (l == 1 && m == 2) {
    colors.splice(1, 2);
    document.write("<br>" + "After Removing two elements from index 0: " + "[ " + colors + " ]")

} else if (l == 1 && m == 3) {
    colors.splice(1, 3);
    document.write("<br>" + "After Removing three elements from index 1: " + "[ " + colors + " ]")

} else if (l == 2 && m == 1) {
    colors.splice(2, 1);
    document.write("<br>" + "After Removing an element from index 2: " + "[ " + colors + " ]")

} else if (l == 2 && m == 2) {
    colors.splice(2, 2);
    document.write("<br>" + "After Removing two elements from index 2: " + "[ " + colors + " ]")

} else if (l == 3 && m == 1) {
    colors.splice(3, 1);
    document.write("<br>" + "After Removing an element from index 3: " + "[ " + colors + " ]")

} else {
    document.write("Sorry this action cant be done")
}