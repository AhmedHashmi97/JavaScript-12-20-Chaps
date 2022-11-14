// Q. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var counting = 15;
var reverse = 1;
var even = 20;
var odd = 20;
var series = 20;


// =-_-=-_-=-_-=-_--_-=-_--_-=-_--_-=-_- Counting Section -_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_-
document.write("Counting: ");

function Counting() {
    for (i = 1; i <= counting; i++) {

        document.write(i + ",")
    }
}

Counting();


// =-_-=-_-=-_-=-_--_-=-_--_-=-_--_-=-_- Reverse Counts Section -_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_-
document.write("<br>" + "<br>" + "Reverse Counts: ");

function reverseCount() {
    for (j = 10; j >= reverse; j--) {

        document.write(j + ",")

    }
}

reverseCount()

// =-_-=-_-=-_-=-_--_-=-_--_-=-_--_-=-_- Even Numbers Section -_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_-
document.write("<br>" + "<br>" + "Even numbers are: ");

function evenNumber() {

    for (k = 0; k <= even; k = k + 2) {
        document.write(k + ",")

    }
}

evenNumber();

// =-_-=-_-=-_-=-_--_-=-_--_-=-_--_-=-_- Odd Numbers Section -_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_-

document.write("<br>" + "<br>" + "Odd numbers are: ");

function oddNumber() {

    for (l = 1; l <= odd; l = l + 2) {
        document.write(l + ",")

    }
}

oddNumber();

// =-_-=-_-=-_-=-_--_-=-_--_-=-_--_-=-_- Series Section -_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_--_-=-_-
document.write("<br>" + "<br>" + "Series: ");

function seriesNumbers() {

    for (m = 2; m <= series; m = m + 2) {
        document.write(m + "k, ")

    }
}

seriesNumbers();