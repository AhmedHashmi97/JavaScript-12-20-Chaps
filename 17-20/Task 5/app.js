// Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

function fruityFruits(fruits) {
    for (i = 0; i < fruits.length; i++) {
        console.log(fruits[i])




    }


}

fruityFruits(fruits);

function printIndex(fruits) {
    for (j = 0; j < fruits.length; j++) {
        console.log("\n" + "Element at index " + j + " is " + fruits[j])
    }
}
printIndex(fruits);