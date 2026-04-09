/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
var day = 9;
while (day <= lastDay) {
    if (day % 3 === 0) {
        console.log("Medicine");
    } else {
        console.log("Rest");
    }
    day++;
}