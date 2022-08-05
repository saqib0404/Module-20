function getSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
    }
    return sum;
}

const myNumbers =[5, 15, 20, 14, 86, 95, 50];
const summation = getSum(myNumbers);
console.log(summation);