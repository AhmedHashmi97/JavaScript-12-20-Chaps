// Q You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Hi, Sir/Mam !" + "\n" + "Place your order whatever you want to: ")

function ser(bakeryItems) {
    for (i = 0; i < bakeryItems.length; i++) {
        if (search == bakeryItems[i]) {
            alert("Nice Choice" + "\n" + "Your item " + bakeryItems[i] + " is present at index  " + i + "\n" + "Please wait some while till we'll get your order(s) ready")

            break

        } else {


            alert("Sorry! item you've ordered isnt available now ")

        }



    }
}

ser(bakeryItems);