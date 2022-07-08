console.log("Welcome to MERN");

//How do we declare varables
var varname = "something";  

//let and Const
//let
let var2 = 7;
//Let is a function scoped variable
//mostly used in for loops 
for(let i = 0; i < 4; i++){
    console.log(i);
}

//Const
const var3 = "some value";
//const are constant and can't be changed
//const var3 = "something else" (this would not run and give an error)


//Rest/Spread (same thing)


// var myArray = [1,2,3,4,5];
// var copyArray = myArray;
// myArray[2] = 20;
// console.log(myArray);
// console.log(copyArray)  //changes in both copy and original


var myArray = [1,2,3,4,5];
var copyArray = [...myArray]; //only changes the copy "..."
myArray[2] = 20;
console.log(myArray);
console.log(copyArray)


//  TERNARY OPERATOR

var myString = "hello";
// if(myString == "hello"){
//     console.log("Hello there!");
// }
// else{
//     console.log("See you later!");
// }

//top and bottom are both the same

// QUESTION                 TRUE                        FALSE
myString =="hello" ? console.log("Hello there") : console.log("See you later");

// DESTRUCTURE
const destructArray = ["horse", "sheep", "cow", "pig", "dog"];
const[ , , anim1, anim2, anime3] = destructArray;

console.log(anim2);

const[, animal2, ...animals] = destructArray;
console.log(animals);
