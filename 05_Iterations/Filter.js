const coding = ['js' , 'py' , 'java' , 'cpp' , 'ruby']

const values = coding.forEach((item) => {
    //   console.log(item);
    return item 
})
//console.log(values);   //forEach does not return anything(it only return UNDEFINED)

// EXAMPLES on NUMBERS
//Filter Operation similar to for each but IT returns values
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//way 1(scope open nhi krenge to return nhi likhna padega)

// const newNums = myNums.filter(  (num) => num > 4)

//way2(scope open krenge to return likhna padega)
// const newNums = myNums.filter(  (num) => {
//        return num > 4
// })

//console.log(newNums)


//using for each
// const newNums = []

// myNums.forEach( (nums) => {
//      if(nums>4){
//         newNums.push(nums)
//      }
// })
// console.log(newNums);

