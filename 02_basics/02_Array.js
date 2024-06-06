const marvel_heros = ["ironamn " , "thor " , "spiderman"]
const dc_heros = ['superman ', 'flash ', 'batman']

//marvel_heros.push(dc_heros)  //iss line se array ke andar array aagya h jo dc_heros vala array h vo ek element ki tarah show hua h marvel_heros me

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//Concat

//const allHeros = marvel_heros.concat(dc_heros);  //concat ke ek new array me dono array ki values daal di
// console.log(allHeros);

//Use of Spread
// const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros);

//use of .flat()

const another_array = [1,2,3,[4,5],7,8,[9,[10,11],12],13,14]
const usable_another_array = another_array.flat(Infinity)  //saare elements ko ek aaray me kr dia

// 

//convert into array

//console.log(Array.isArray("Tushar"));
//console.log(Array.from("Tushar"));  //array me convert kr dia

console.log(Array.from({name : "Tushar"}));  //empty array de dia kyu mention krna padega key ka ya values ka array bana na h(INTRESTING)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));  //array bana dia

//Elements of array can only accessed by a single way (myArr[0])