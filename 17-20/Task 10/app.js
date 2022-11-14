// Q. 10. Write a program to print multiples of 5 ranging 1 to 
// 100
document.write("Multiples of 5 ranging 1 to 100 are: ")

function fiveMultiple() {
    for (i = 5; i <= 100; i = i + 5)
        document.write(i + ",")

}

fiveMultiple();