// Primitive

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTamp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 276237423545324324334n


// Reference (Non primitive)

const heros = ["Shaktiman", "Naagraj", "Doge"]

let myObj = {
    name: "Hitesh",
    age: 23,
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3