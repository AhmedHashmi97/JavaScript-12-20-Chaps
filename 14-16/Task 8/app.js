// Q. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

var students = ['Michael', 'John', 'Tony'];
var score = [320, 230, 480];
var totalMarks = 500;
michaelPercentage = score[0] * 100 / totalMarks;
johnPercentage = score[1] * 100 / totalMarks;
tonyPercentage = score[2] * 100 / totalMarks;
document.write("Score of " + students[0] + " is " + score[0] + ", " + " Percentage: " + michaelPercentage + "%" + "<br>" + "Score of " + students[1] + " is " + score[1] + ", " + " Percentage: " + johnPercentage + "%" + "<br>" + "Score of " + students[2] + " is " + score[2] + ", " + " Percentage: " + tonyPercentage + "%")