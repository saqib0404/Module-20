/* 
Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
*/
function timeConverter (time){
    const newTime = time * 60;
    return newTime;
}
const time = 1.5;
const timeBySec = timeConverter(time);
console.log(timeBySec, "- minutes");