// Q. . Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out)

var devVals = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices:" + "<br>" + devVals)
document.write("<br>" + "<br>" + "Out:" + "<br>" + devVals.pop());
document.write("<br>" + "Out:" + "<br>" + devVals.pop());
document.write("<br>" + "Out:" + "<br>" + devVals.pop());
document.write("<br>" + "Out:" + "<br>" + devVals.pop());