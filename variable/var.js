const accountId = 12343
let accountEmail = "vaishnavi@singsys.com"
var accountPassowrd = "125354"
accountCity = "Lucknow"
let accountState;

//accountId = 12343 //not allowed

accountEmail = "vaishu@singsys.com"
accountPassowrd = "56565"
accountCity = "Ayodhya"

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId)
console.table([
    accountId,accountEmail,accountPassowrd,accountCity,accountState
]);

