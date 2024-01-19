
let mydate = new Date()
console.log(mydate.toString());

console.log(mydate.toDateString());
//Thu Jan 18 2024

console.log(mydate.toISOString());
//2024-01-18T04:35:21.379Z

console.log(mydate.toLocaleDateString());
//1/18/2024

console.log(mydate.toLocaleString());
//1/18/2024, 10:06:39 AM


let myCreatedate = new Date(2024, 2, 23)
console.log(myCreatedate.toDateString())
//Sat Mar 23 2024


let myCreatedate1 = new Date("2024-02-23")
console.log(myCreatedate1.toLocaleString())
//2/23/2024, 5:30:00 AM


let mytimeStamp = Date.now()

console.log(mytimeStamp);
console.log(myCreatedate.getTime());
console.log(Date.now());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getHours());

//`${newDate.getHours()} and the time`

let newDate1 = newDate.toLocaleString('defaul',{
    weekday: "long",
    day:"numeric",
    timeZoneName:"shortGeneric"
})

console.log(newDate1);