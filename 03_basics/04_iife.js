//  IIFE => Immediately Invoked Function Expression

function chai(){
    console.log(`DB Connected`)
}
chai();   //yeh funcition problem dega agar end me hum semi-colon use nhi krenge to(;)

//using iife Syntax

(function chai(){
    //named iife and name is CHAI
    console.log(`DB Connected`);
})();


//unnamed iife
( () => {         //it is an arrow function
    console.log(`DB connected`)
})();

//to pass variable in it we use
( (name) => {         //it is an arrow function
    console.log(`DB connected  ${name}`)
})("Tushar")



