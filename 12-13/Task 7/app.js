// Q. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

var time = +prompt("Enter Time (24-hours Format) :")

function timeCheck() {

    if (time == 100) {
        document.write("In a 24-time format Its 1:00 pm After 12:00 pm Morning" + "<br>" + "And 1:00 am after 12:00 am")

    } else if (time == 200) {
        document.write("In a 24-time format Its 2:00 pm After 12:00 pm Morning" + "<br>" + "And 2:00 am after 12:00 am")

    } else if (time == 300) {
        document.write("In a 24-time format Its 3:00 pm After 12:00 pm Morning" + "<br>" + "And 3:00 am after 12:00 am")

    } else if (time == 400) {
        document.write("In a 24-time format Its 4:00 pm After 12:00 pm Morning" + "<br>" + "And 4:00 am after 12:00 am")

    } else if (time == 500) {
        document.write("In a 24-time format Its 5:00 pm After 12:00 pm Morning" + "<br>" + "And 5:00 am after 12:00 am")

    } else if (time == 600) {
        document.write("In a 24-time format Its 6:00 pm After 12:00 pm Morning" + "<br>" + "And 6:00 am after 12:00 am")

    } else if (time == 700) {
        document.write("In a 24-time format Its 7:00 pm After 12:00 pm Morning" + "<br>" + "And 7:00 am after 12:00 am")

    } else if (time == 800) {
        document.write("In a 24-time format Its 8:00 pm After 12:00 pm Morning" + "<br>" + "And 8:00 am after 12:00 am")

    } else if (time == 900) {
        document.write("In a 24-time format Its 9:00 pm After 12:00 pm Morning" + "<br>" + "And 9:00 am after 12:00 am")

    } else if (time >= 0000 && time < 1200) {
        document.write("Good Morning! ")

    } else if (time >= 1200 && time < 1700) {
        document.write("Good Afternoon")

    } else if (time >= 1700 && time < 2100) {
        document.write("Good Evening!")

    } else if (time >= 2100 && time <= 2359) {
        document.write("Good Night!")

    } else {
        document.write("Program is not Allowed to implement case in these! ")

    }




}
timeCheck();