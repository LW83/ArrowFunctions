/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    //code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum)

// Arrow Function With Parameters - need to use this is more complex logic in function

const addTwoNumbers = (a, b) => {
    return a + b;
}

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b; //can also put a+b in brackets

// Implicit Returns
const saySomething = message => console.log(message); //only one parameter so doesnt need brackets
saySomething('Hello!');

const sayHello = () => console.log('Hello there!') //use empty sets of parantheses where no parameter at all 

// Returning Multiple Lines of code
// If you want to return multiple lines of code, must wrap whatever comes after teh return keyword in brackets
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines);

//Enter node arrow-functions.js in terminal to see output
