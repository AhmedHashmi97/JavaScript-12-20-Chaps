// Q.11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
var Citieslist = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta'];
document.write("Cities list: " + "<br>" + Citieslist)
var selectedCities = Citieslist.slice(0, 3)
document.write("<br>" + "<br>" + "Selected Cities list: " + "<br>" + selectedCities)