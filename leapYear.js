function isLeapYear(year){
    const leapYear = year % 4;
    if (leapYear == 0){
        return true;
    }
    else{
        return false;
    }
}

const year = 2020;
var getLeapYear = isLeapYear(year);
console.log(getLeapYear);