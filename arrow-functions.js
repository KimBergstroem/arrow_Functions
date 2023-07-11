/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
/* function addTwoNumbers(a,b) {
    // Code Block
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum); */


// Arrow Function With Parameters
const addTwoNumbers = (a,b) => {
    //Code Block
    return a + b;
}
let sum1 = addTwoNumbers(3,5);
console.log(sum1);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => a + b;
let sum2 = addTwoNumbers(5,6);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello there!");

const sayHello = () => console.log("hello");
sayHello();

// Returning Multiple Lines
const returnMulitpleLines = () => (
    `<p>
    This is multiple String
    </p>`
)