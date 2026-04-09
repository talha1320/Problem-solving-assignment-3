/** Problem 06 : (Current Salary) */

var experience = 30;
var startingSalary = 45000;

var currentSalary = startingSalary;
var year = 1;

while (year <= experience) {
  currentSalary *= 1.05;
  year++;
}

console.log(currentSalary.toFixed(2));