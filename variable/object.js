// Singleton..................

// Obejct literals............

const mySym = Symbol("key1")

const JSUser = {
    name: "vaishu",
    "full company": "Singsys Pte.Lid",
    [mySym]:"mukey1",
    age:18,
    location: "Ayodhya",
    email: "vaishnavi@singsys.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JSUser.isLoggedIn);

console.log(JSUser["email"]);
console.log(JSUser["full company"]);
console.log(JSUser["full company"]);
// console.log(JSUser.mySym);
console.log(JSUser[mySym]);
JSUser.email = "vaishu@singsys.com"
//Object.freeze(JSUser);
JSUser.email = "vaishu@google.com"
//console.log(JSUser)
JSUser.greeting = function(){
    console.log(`Hello JS user`)
}
JSUser.greetingTow = function(){
    console.log(`Hello JS user,${this.name}`)
}                                          

console.log(JSUser.greeting())
     
console.log(JSUser.greetingTow());


// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "vaishnavi@singsys.com",
    fullname:{
        userfullname:{
            firstname: "vaishnavi",
            lastname: "singsys"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"c", 2:"d"}

//const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2}

console.log(obj3);

const user = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    },
    {
        id: 4,
        email: "s@gmail.com"
    }
]

console.log(user[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('email'));


/************************** de-structure ************************/

const course = {
    coursename: "JavaScript",
    price:"100000",
    courseInstructor: "vaishu"

}

// course.courseInstructor

const {courseInstructor} = course
const {coursename} = course

console.log(courseInstructor);
console.log(coursename);

const {courseInstructor :  course1} = course


console.log(course1);