function mileTokm(mile){
    const kilometer = mile*1.609;
    return kilometer;
}

const schoolMile = 2;
const scchoolKm = mileTokm(schoolMile);
console.log(scchoolKm);