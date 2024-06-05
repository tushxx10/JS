const score = 400
// console.log(score);

const balance = new Number(4000)
// console.log(balance);

// console.log(typeof balance);

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toFixed(1));  //no ke baad kitne decimal points chahea

const otherNumber = 23.899
// console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.899
// console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 1123.899
// console.log(otherNumber2.toPrecision(3));

const hundred = 1000000000
// console.log(hundred.toLocaleString());  //yeh comaa laga deta h no me

// console.log(hundred.toLocaleString('en-IN'));  //abb indian no ke hisaab se show krega


// ************************MATHS**************************\

console.log(Math);

// console.log(Math.abs(-54)); //-ve value ko +ve banata h
// console.log(Math.round(3.89));  //round => round off krta h value ko
// console.log(Math.ceil(4.1));  // (5) ceil => mtln upar ki he value choose krega 

// console.log(Math.floor(4.999)); //(4) floor => mtlb niche ki value lega

// console.log(Math.min(12,3.33,12345));  //find minimum value

console.log(Math.random());  // jo bhi value aaegi vo 0-1 ke bich me lie kregi hamehsa

console.log(Math.random()*10 + 1); //abb value hamesha 1 ya usse badhi aaegi
console.log(Math.floor(Math.random()*10) + 1);


const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+min);  // hamesha 10(min) ya usse zyada





