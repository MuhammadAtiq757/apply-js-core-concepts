function isLeapYear(year){
    const remainder = year % 2;
    if(remainder == 0){
    //    console.log("your year is leap year : ", year);
    return true;
    }

    // else na likhe shudo return likhe dile hobez
//     else{
//         // console.log("your year is not a leap year: ", year);
        
//     }
return false;

}

const myLeapYear = isLeapYear(2005);
console.log("my leap year", myLeapYear);
const yourLeapYear = isLeapYear(2004);
console.log("your leap year year", yourLeapYear);

