// Singleton
//When we declare objects as Literals each object is disting hence it's not a Singleton
//where as constructor forms singleton (Object.create)


//Declaration of symbol(unique)
const mySym = Symbol("key1")

//Object literals (way of declaring objects)

const JsUser = {
    name: "Tushar",
    "full name": "Tushar Gulati",
    // mySym: "mykey1",

    //to use Symbol as Symbol we use Square Bracketts
    [mySym]: "mykey1",
    age: 18,
    email: "tushar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// How to access objects (2ways)
//1) console.log(JsUser.email);
//2) console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser.mySym); //it is gving output (mykey1) but it is not use as a symbol
// console.log(typeof JsUser.mySym);  //it's data type is String


 
JsUser.email = "Tushar123@gmail.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser) //iske baad object me change nhi hoga jitna bhi krlo
JsUser.email = "Tushar123@45gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js USer");
}

JsUser.greeting2 = function(){
    console.log(`hello Js User , ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
