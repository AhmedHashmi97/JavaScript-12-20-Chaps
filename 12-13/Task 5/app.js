// Q. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

var p = prompt("Enter a Password: ")

var q = prompt("ReEnter your Password: ")

function passCompare() {
    if (p === q) {
        document.write("Password Matched! ")

    } else {
        document.write("Invalid Password" + "<br>" + "Your Password doesnt match with the first")

    }


}

passCompare();