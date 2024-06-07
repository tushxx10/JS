const myNums = [1,2,3,4]

// const newNums = myNums.reduce( function (acc,currVal)  {
//         console.log(`acc: ${acc} and currVal: ${currVal}`)
//         return acc+currVal
// } , 0 )

const newNums = myNums.reduce( (acc,currVal) => acc+currVal , 0 )

console.log(newNums)

const shoppingCart = [
    {
        itemName: 'py course',
        price: 900
    },
    {
        itemName: 'java',
        price: 1000
    },
    {
        itemName: 'cpp',
        price: 1100
    },
]

const sum = shoppingCart.reduce( (acc,item) => (acc + item.price),0 )

console.log(sum)