//forEach loop(calling back Function)
const coding = ['js' , 'rb' , 'java' , 'py' , 'cpp']

// coding.forEach( function (index) {
    //console.log(index)
// })

//For Each loop in Arrow function

// coding.forEach( (index) => {
//console.log(index)
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr)
// })


const myCoding = [
    {
         languageName: 'Javascript',
         languageFileName: 'js'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
   } ,
    {
    languageName: 'Python',
    languageFileName: 'py'
    },
{
    languageName: 'java',
    languageFileName: 'Java'
}
]

myCoding.forEach( (item) => {
       console.log(item.languageName)
})

