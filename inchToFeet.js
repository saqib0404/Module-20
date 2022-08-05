function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const myInch = 69;
var myFeet = inchToFeet(myInch);
myFeet = myFeet.toFixed(2);
myFeet = parseFloat(myFeet);
console.log(myFeet);