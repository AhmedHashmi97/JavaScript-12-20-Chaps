// Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var a = ['This', 'is', 'my', 'cat'];
document.write("Array: " + "<br>" + a)
var b = a.join(' ')
document.write("<br>" + "<br>" + "String: " + "<br>" + b)