/* 
function factorial (number){
    let result = 1;
    for( let i = 1; i <= number ; i++){
        result *= i;
    }
    return result;
}
const result = factorial(5);
console.log(result);
 */


// reverse Way

function factorial (number){
    let result = 1;
    for( let i = number; i >= 1; i--){
        result *= i;
    }
    return result;
}
const result = factorial(5);
console.log(result);