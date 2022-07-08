/*  For the following five blocks of code, predict the output.
If a line of code will throw an error, state the error.
*/

//Problem 1

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

/*Answer: This will give off an error since both randomCar and 
otherRandomCar are undefined within the array   
After Testing: Telsa and Mercedes are outputted */

//Problem 2

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

/*Answer: This will print Elon twice.
After Testing: name is not defined, only otherName would run
and print "Elon"*/

//Problem 3

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

/*Answer: password would show but, hashedPassword is undefined.
After Testing:Password is shown but hashedPassword is undefined */

//Problem 4

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

/*Answer: A Syntax error would show since the numbers don't match
and you can't compare in a console.log.
After Testing: First log is "false" and second log is "true"*/

//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

/*Answer: first log will print "value", second log: "value"
third log: will print an error since it's asking for a value in a 
array when there is none, fourth log: "5".
After Testing: 1: value, 2:[1,5,1,8,3,3], 3:"1", 4:"5"*/