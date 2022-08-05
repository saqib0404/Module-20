function getSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
    }
    return sum;
}

function findOddNum(numbers){
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if( element % 2 == 1){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const numbers= [1, 2, 3, 9, 5, 4, 15, 20, 7];
const oddNumbers = findOddNum(numbers);
console.log(oddNumbers);

const getSumOfOddNumers = getSum(oddNumbers);
console.log(getSumOfOddNumers);