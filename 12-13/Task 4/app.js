// Q. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise

var v = prompt("Enter a Character: ")

function vowelCheck() {
    if (v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u') {
        document.write("Input Character " + v + " is a vowel")

    } else if (v == 'A' || v == 'E' || v == 'I' || v == 'O' || v == 'U') {
        document.write("Input Character " + v + " is a vowel")
    } else {
        document.write("Input Character " + v + " is a consonant")
    }
}

vowelCheck();