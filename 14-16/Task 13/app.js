// Q. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
var devVals = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices: <br>" + devVals);
document.write("<br>" + "<br>" + "Out:" + "<br>" + devVals.shift());
document.write("<br>" + "Out:" + "<br>" + devVals.shift());
document.write("<br>" + "Out:" + "<br>" + devVals.shift());
document.write("<br>" + "Out:" + "<br>" + devVals.shift());