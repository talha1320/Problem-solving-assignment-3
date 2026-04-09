/*** Problem -01 ( Divide the Asset ) */
var area = 800;

// write your code here
var result1 = area / 2;
console.log(result1);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
var result;
if (money >= 45000) {
    result = "Laptop";
}   
else if (money >= 10000)  {
    result = "Cycle";
}
else {
    result2= "Chocolate";
}
console.log(result2);

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
var day = 9;
while (day<= lastDay) {
    if (day % 3 === 0) {
        console.log("Medicine");
    }
    else {
        console.log("Rest");
    }
    day++;
}  

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if (
    fileName.includes("#") ||
    fileName.includes(".pdf") ||
    fileName.includes(".docx")
) {
    fileName = "Store";
} else {
    fileName = "Delete";
}

console.log(fileName);


/** Problem 05 - ( PH Email Generator ) */
var student = { name: "jhankar", roll: 1014, department: "cse" };

// write your code here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";

console.log(email);

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