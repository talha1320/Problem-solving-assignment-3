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