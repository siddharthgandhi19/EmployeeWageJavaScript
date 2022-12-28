const IS_PRESENT = 0;
let empCheck = Math.floor(Math.random() * 10 % 2 );
if (empCheck == IS_PRESENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}


//UC-2
const IS_PART_TIME = 1 , IS_FULL_TIME = 2;
const PART_TIME_HRS = 4 , FULL_TIME_HRS = 8;
const WAGE_PER_HRS = 20;
let empHrs = 0
empCheck = Math.floor(Math.random() * 10 % 3 );
switch (empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HRS;
        break;
    default:
        empHrs=0;
}
let empWage = empHrs * WAGE_PER_HRS;
console.log("Emp. Wage :- " + empWage);