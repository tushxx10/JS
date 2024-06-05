// Dates

//month 0 se start hote h

let myDate = new Date()
// console.log(myDate.toString());

//exact date h yeh
// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());

//TYPE of DATE ==> OBJECT
// console.log(typeof myDate);


//Month -0 se start hote h Js me
// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());


//For exact date and time use LocaleString
// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());


//if we want date in a specific format isme month 01 se start hota h 
// let myCreatedDate = new Date("2024-06-06")
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("06-06-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  //milisecond value
// console.log(myCreatedDate.getTime());


// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log((newDate.getMonth()) + 1);
console.log(newDate.getDay());

