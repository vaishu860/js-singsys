const name = "vaishu"
const repocount = 50

console.log(name + repocount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String("vaishu-hc-ac");

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("h"));

const newString = gamename.substring(0, 4);

console.log(newString);

const anotherString = gamename.slice(-5, 6);
 
console.log(anotherString);// Reverse value print 

const newStringOne = "      vaishu        "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20chodhary"

console.log(url.replace("%20" , "-"));

console.log(gamename.split("-"));
