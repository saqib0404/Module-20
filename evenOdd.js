function isEven(num){
    if(num % 2 == 0){
        return true
    }
    else{
        return false
    }
}
const num = 5;
const myNum = isEven(num);
console.log(myNum);