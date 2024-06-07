//for of
//SYNTAX
// for (const iterator of object) {
    
// }

//Printing no 1-5
const arr = [1 , 2 , 3 , 4 , 5]
for (const num of arr) {
    //console.log(num)
}

const greeting = "Hello World"
for (const greet of greeting) {
//console.log(`Each char is ${greet}`)
}
//   MAPS  (similar to array)

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('FR' , "France")
map.set('IN' , "India") //same value daalne pr bhi ek he baar show krega jis order me dia h Unique values contain krta h MAP
console.log(map)

//Destructuring
for (const [key , value] of map) {
    console.log(key , ':-' , value)
}


//Forof loop on Object

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA5'
}
//myObject is not iterable
for (const [key,value] of myObject) {
    console.log(key , ':-' , value)
}