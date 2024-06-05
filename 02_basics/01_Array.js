//Arrays

//Decleration of Arrays

const myArr = [0,1,2,3,4]
// console.log(myArr);
//konse index pr kya value h
// console.log(myArr[0]);

const myHeroes=["Akshay " , "Tiger " , "Kartik"]
const myArr2 = new Array(1,2,3,4,5)
// 

//Array Methods
// myArr.push(2)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(111)  //not a good practice (isme jo vale likhi h vo 0th index pr aati h to saare elements ko move krna padta h) time consuming

// myArr.shift()  //it removes 0th index element

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(90))
// console.log(myArr);

const newArr = myArr.join()
// console.log(myArr);  // yeh normal array print krta h
// console.log(newArr);  // iska type change hokar string ho gya h isliye bracketts remove ho gye h 

// console.log(typeof newArr); //string h


// SLICE and SPLICE

//sbse pehle A ke andar myArr ki values daali
console.log("A " , myArr);

//fir ek naya array banay usme slice use kia
const myNew1 = myArr.slice(1,3)
console.log(myNew1);  //usko print krvaya

//fir change jo ayaa slice ke baad array me vo print krvaya
console.log("B " , myArr); //slice krne ke baad array same rha

const myNew2 = myArr.splice(1,3)  //splice method use krne ke baad values myArr se hat gai
console.log(myNew2);
console.log("C " , myArr);
