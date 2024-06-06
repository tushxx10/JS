 function sayMyName(){
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
}

//sayMyName => is function refrence
//sayMyName() => yeh ho gya execution
// sayMyName(); 

// function addTwoNo(number1 , number2){  //here number1 and number2 are parameters
//     console.log(number1 + number2);
// }
//addTwoNo(3,"a");
//addTwoNo(1,null ); //here 1 and null are arguments

function addTwoNo(number1 , number2){
    // let result = number1 + number2
    // return result

    return number1+number2
}
const result = addTwoNo(2,3);
// console.log("Result is :" ,result);   //result is showing undefined

function userLoginMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username! ");
        return ;
    }
    return `${username} just logged in `
}
// console.log(userLoginMessage());


function calculateCartPrice(val1 , val2 ,...num1){  //these 3 dots here work as rest operator and show all argument values as an Array!
    return num1
}
//console.log(calculateCartPrice(200,100,12,90,32,23))  //output is [12,90,32,23] kyuki 200 val1 me gya or 100 val2 me or return num1 hua

const user = {
     username: "Tushxx10",
     price: 199
}

function handleObject(AnyObject){
    // console.log(`Username is ${AnyObject.username} , and Price is ${AnyObject.price}`)
}
handleObject(user)

const array = [1,2,3,4,5]

function callingIndex(getArray){
    return getArray[1]
}

// console.log(callingIndex(array))
console.log(callingIndex([1,2,3,4,5]))