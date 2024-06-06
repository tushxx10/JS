//Singleton object declaration
//const TinderUser = new Object();
//console.log(TinderUser);
//const TinderUser1 = {} // normal object
// console.log(TinderUser1); 
 //both will give same empty object output


 const TinderUser = {}

 TinderUser.id = "123@"
 TinderUser.name = "Yash"
 TinderUser.isLoggedIn = false

//  console.log(TinderUser);

const regularUser = {
    fullname : {
        username : {
            firstName: "Tushar",
            lastName: "Gulati"
        }
    }
}

//ways tpo acces above function
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username);
// console.log(regularUser.fullname.username.firstName);

// combnining objects

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1 , obj2)   // abhi hamaro obj1 or obj2 ki value target me ({isme aa rhi h}) // we use {} this parameter for betterment iske bina bhi same output hota h lkn hum isko use krenge (we take that empty array kya pta or bhi values hongi)

//Object.assign(target,source) agar hum {} isse use nhi krenge to fir saari value obj1 me jaaengi

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


//multiple objects
const users = [
    {
        id: 1,
        email: "sWnjde"
    },
    {
        id: 1,
        email: "sWnjde"
    },
    {
        id: 1,
        email: "sWnjde"
    },
    {
        id: 1,
        email: "sWnjde"
    }
]
// console.log(users[2].id);

//console.log(TinderUser);

//Agar saari keys object ki access krni h to
//console.log(Object.keys(TinderUser));
//Agar saari values object ki access krni h to
//console.log(Object.values(TinderUser));

//Har ek key value ko ek array me convert kr skte h
//console.log(Object.entries(TinderUser));

//check krne ke liye ki TinderUser(Object) me yeh value present h ya nhi
//console.log(TinderUser.hasOwnProperty('isLoggedIn'));  //output is TRUE kyuki present h


//*****************DeStructuring of Objects****************//


const Course = {
    courseName: "Js in Hindi",
    price: "990",
    CourseInstructor: "Hitesh"
}
//access keys in object
// Course.price

//Another way of accessing it

const {CourseInstructor: Instructor } = Course
console.log(Instructor);



//*******************API's Concept**********************/
//JSON (JSON ki value or keys dono string hoti h)

// {
//      "name": "Tushar",
//      "coursename": "Js in hindi",
//      "price": "990"
// }

//API's in array format

[
    {},
    {},
    {}
]