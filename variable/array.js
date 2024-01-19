const myArr = [0,1,2,3,4,5]
// console.log(myArr)
 
// const myArr2 = new Array(1,2,3);

// console.log(myArr2[1]);

// // Array Methods

// myArr.push(6);
// myArr.push(11);
// myArr.pop()
// myArr.unshift(6);
// myArr.shift(); 
// console.log(myArr.includes(9));
// //Array value check 
// //false
// console.log(myArr.indexOf(8));
// //Array value check 
// //-1
// console.log(myArr);

// //List convert string use join.
// const newArray = myArr.join()

// console.log(myArr);
// // [
// //     0, 1, 2, 3,
// //     4, 5, 6
// //   ]

// console.log(typeof newArray);
// //0,1,2,3,4,5,6

 
//slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

const myn2 = myArr.splice(1,3)

console.log(myn2);



const Arrayname = ["V", "A", "S" ,"U"]
const Arrayname2 = ["A", "B" , "C" , "D"]

// Arrayname.push(Arrayname2);

// console.log(Arrayname);
// console.log(Arrayname[4][2]);


//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const allArray = Arrayname.concat(Arrayname2);

console.log(allArray);

//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const allnewArray = [...Arrayname , ...Arrayname2]

console.log(allnewArray);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
 const real_another_array = another_array.flat(Infinity)

 console.log(real_another_array);
 console.log(Array.from("2333"));

 const score1 = 100
 const score2 = 200
 const score3 = 300

 console.log(Array.of(score1,score2,score3))