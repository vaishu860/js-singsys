// Stack (Primitive) , Heap (Non-primitive)

let myYoutubename = "vaishu"
let anothername = myYoutubename
anothername = "singsys"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "vaishnavi@singsys.com",
    upi : "user@ybl"
}

let userTow = userOne
console.log(userTow.email);

userTow.email = "Singsys@singsys.com"

console.log(userOne.email);
console.log(userTow.email);