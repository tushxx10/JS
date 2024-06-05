// PRIMITIVE

//  7 types : Number , Null , Undefined , Boolean , String , Symbol , BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

// console.table([score,scoreValue,isLoggedIn,outsideTemp,userEmail]);

const Id=Symbol('123');
const anotherId=Symbol('123');

//symbol me same no daalne ke baad bhi alag kyuki yeh unique h
// console.log(Id===anotherId);

const bigNumber = 123456789;
// console.log(bigNumber);



// NON-PRIMITIVE(Refrence)
// Objects , Array , Functions

const heroes=["SRK" , "Salman KHan", "Akshay Kumar"];

{
     //representation  of object
    name: "Tushar";
    age:21;
}

// representation of Functions

const myFunction = function(){
    // console.log("Tushar");
}

//  **********************************************************

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubeName = "TusharVlogs"   //since primitive datatype is used isliye original value change nhi hui
 
let anotherName = myYoutubeName;

// console.log(myYoutubeName);
// console.log(anotherName);

anotherName="West Delhi Gang";

// console.log(myYoutubeName);
// console.log(anotherName);


let userOne = {
    email:"abc@google.com",
    upi:"123@1",
}
console.log(userOne.email);

let userTwo=userOne;
console.log(userTwo.email);

userTwo.email="tus@12";

console.log(userTwo.email);
console.log(userOne.email);  //kyuki yeh nonprimitive datatype h isliye original value bhi change hui h

