
/*
 function factorial(number){
    let result = 1;
    let i = 1;
    while(i <= number){
        result *= i;
        i++;
    }
    return result;
}

const result = factorial(5);
console.log(result);
 */

// reverse way

function factorial(number){
    let result = 1;
    let num = number;
    while(num >= 1 ){
        result *= num;
        num--
    }
    return result;
}
const number = 5;
const production = factorial(number);
console.log(production);