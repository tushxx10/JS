//for number
let score = 33;

// console.log("1a" , typeof score);
// console.log("1b" , typeof(score));

let valueInNumber = Number(score);
// console.log("1c" , typeof score);

//for number in string
let score1 = "33";
// console.log("2a" , typeof score1);

let valueInNumber1 = Number(score1);
// console.log("2b" , typeof valueInNumber1);
// console.log(valueInNumber1);

//for number+alphabets in stringtype
let score2 = "33abc";
// console.log("3a" , typeof score2);

let valueInNumber2 = Number(score2);
// console.log("3b" , typeof valueInNumber2);
// console.log(valueInNumber2);  //Actual value is NaN(Not a Number)

//for null
let score3 = null;
// console.log("4a" , typeof score3);

let valueInNumber3 = Number(score3);
// console.log("4b" , typeof valueInNumber3);
// console.log(valueInNumber3);  // 0

//for undefined
let score4 = undefined;
// console.log("5a" , typeof score4);

let valueInNumber4 = Number(score4);
// console.log("5b" , typeof valueInNumber4);
// console.log(valueInNumber4);   //NaN

//for boolean
let isLoggedIn=1;

let booleanisLoggedIn=Boolean(isLoggedIn)
// console.log(booleanisLoggedIn)

//1 => true ; 0 => false
// "" => false;
// "Tushar " => true;


// ******************** OPERATIONS********************

let value = 3
let negValue=-value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="Hello"
let str2=" Tushar"

let str3=str1 + str2;
// console.log(str3);

//console.log(1 + "2");   //gives 12
//console.log("1" + 2);  //gives 12
//console.log("1" + 2 + 2);   //gives 122
//console.log(1 + 2 + "2");  //gives 32

// console.log(+true);   => 1
// console.log(+"");   => 0

let gameCounter=100
let gameCounter2=100

gameCounter++;
console.log(gameCounter);

++gameCounter2;
console.log(gameCounter2);

