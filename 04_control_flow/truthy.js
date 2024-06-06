const userEmail = []

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

//falsy values : false, 0 -0, NigInt 0n , ""(empty string) , null , undefined , NaN

//truthy values : true , 1 , "0", 'false' , " " , [](empty array) , {}(empty object) , function(){} (empty function)

if(userEmail.length===0){   //way to check array is empty
    console.log("Array is empty");
} else{
    console.log("Array not empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){  //way to check object is empty or not
    console.log("Object is empty");
} else{
    console.log("Not empty")
}

// Nullish Coalescing Operator (??) : depends on 2 things (null and undefined)
let val1,val2,val3,val4;
val1 = 10 ?? 2
console.log(val1);
val2 = null ?? 10
console.log(val2)
val3 = null ?? undefined
console.log(val3)
val4 = undefined ?? null
console.log(val4)


//******************Terniary operator**********************
// condition ? true : false 
 
const teaPrice = 100
teaPrice >=80 ? console.log("More than 80") : console.log("Less tha 80")