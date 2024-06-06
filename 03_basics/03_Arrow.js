const user = {
    username: "Tushar",
    price: 999,

   welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);  //yeh THIS jitna bhi content h sb explain krega (It give information of current context)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this);  //here it gives empty vale(kyuki current context kuch nhi h yaha par)


// function chai(){
//     console.log(this);
// }
// chai();


const chai = () => {   //now it bexomes an Arrow Function
          let username = "Tushar"
          console.log(this.username)
}
// chai()

// Arrow function syntax () => {}

    // const addTwo = (num1 , num2) => {
    //   return num1 + num2   //it is explicit humne return keyword ka use kia h
    // }

//Another way of showing above function

       //const addTwo= (num1 , num2) => num1+num2  //it is implicit
       const addTwo = (num1 , num2) => ({username : "Tushar"})
    console.log(addTwo(3,4));


    