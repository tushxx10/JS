const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Sbhi no ke andar 10 add krna h
// const newNums = myNums.map( (nums) => nums+10)
// const newNums = myNums.map( (nums) => {
//     return nums+10
// })
// console.log(newNums)

//Chaining Methods
const newNums = myNums
                     .map( (nums) => nums*10 )
                     .map( (nums) => nums+1 )
                     .filter( (nums) => nums>40 )
console.log(newNums)                        