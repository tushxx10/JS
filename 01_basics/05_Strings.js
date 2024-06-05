const name = "Tushar";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

 const gameName = new String('TusharG')

//  console.log(gameName[0]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);

//  console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)  //jo last me value daali h vo include nhi ho rhi
// console.log(newString);

const anotherString = gameName.slice(-7,4)
// console.log(anotherString);


//    fOR Removing Extra Spaces
const newStringOne = "    Tushar     "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://tushar.com/tushar%20gulati"

//kisi word ko link me kisi or se replace krna h to iska use hoga
// console.log(url.replace('%20' , '10-10'))

//We can alspo ask ques from it
//ki tus word present h ya nhi url me
console.log(url.includes('tus'));   //yeh present h 
 console.log(url.includes('Sundar'));  //yeh nhi present


 //split se hum split kr skte h string me 
 const gameName1 = "tus-har-gul-ati";
 console.log(gameName1.split('-'));
