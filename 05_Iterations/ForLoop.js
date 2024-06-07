//for
//Printing no 1-10
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element==5){
        // console.log("5 is best no")
    }
    //  console.log(element) 
}

for(let i=0;i<=10;i++){
    //console.log(`Outer Loop Value is : ${i}`);
    for(let j=0;j<=10;j++){
        //console.log(`Inner Loop Value is ${j} and inner loop no is ${i}`)
        //console.log(i + "*" + j + ' = ' + i*j);
    }
}

let myArray = ["Flash" , "Batman" , "Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//break and Continue

// for (let index = 0; index <= 20; index++) {
//     const element = index;
//     if(element==5){
//         console.log('detected 5')
//         break;
//     }
//     console.log(`valie of index is : ${index}`)   
// }

for (let index = 0; index <= 20; index++) {
    const element = index;
    if(element==5){
        console.log('detected 5')
        continue
    }
    console.log(`valie of index is : ${index}`)   
}