// var c = 100
let a= 300
if(true){   //content inside it is local scope
    let a = 10
    const b = 20
    // console.log("Value of a is :" , a)
    // var c = 10009
}
//console.log(a)
// console.log(b)
// console.log(c)


// ******************NESTED SCOPE*************************
function One(){
    const username = "Tushar"

    function two(){
        const website = "Youtube"
        // console.log(username)
    }

    // console.log(website) //yeh nhi chalega kyu yeh scope ke bahar h
    two()
}

// One()


if(true){
    const username = "Tushar"
    if(username === "Tushar"){
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)


// ************************** intresting ****************
 console.log(addOne(5))  //yeh run nhi hua 
function addOne(num){
    return num +1
}
// addOne(5)




//Hosting
// console.log(addTwo(5))
const addTwo = function(num){
    return num +2
}
addTwo(5)
console.log(addTwo(5))
