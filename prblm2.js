/* 
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
*/
function findLeapYear(years){
    const LeapYears = [];
    for(let i = 0; i < years.length; i++){
        let element = years[i];
        if(element % 4 == 0){
            LeapYears.push(element);
        }
    }
    return LeapYears;
}
const years = [2023, 2024, 2025, 2028, 2030];
const leapYears =findLeapYear(years);
console.log(leapYears);