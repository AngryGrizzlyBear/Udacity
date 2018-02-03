/*
 * Instructions: Change the `greeting` string to use a template literal.
 */

// const myName = 'Evan';
// const greeting = `Hello, my name is ${myName}`;
// console.log(greeting);


// how I would've done it.

const myName = {
 name: "Evan"
};
const greeting = `Hello, my name is ${myName.name}`;

console.log(greeting);