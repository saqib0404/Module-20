/* 
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
*/
function findOdd(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element % 2 == 1){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

function findOddSum(oddNumbers){
    sum = 0;
    for(let i = 0; i < oddNumbers.length; i++){
        let element = oddNumbers[i];
        sum += element;
    }
    return sum;
}
const numbers = [5, 7, 8, 10, 45, 30];
const oddNumbers = findOdd(numbers);
const oddSum = findOddSum(oddNumbers);
console.log(oddNumbers);
console.log(oddSum);
