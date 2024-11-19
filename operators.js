// Arithmetics Operators
// 1, additions
let sum = 5 + 3;
console.log(sum);

// 2, subtractions
let difference = 10-4;
console.log(difference);

// 3, multiplication
let product = 7 * 2;
console.log(product);

// 4, division
let quotient = 20 / 5;
console.log(quotient);

// 5, remainder
let remainder = 10 % 3;
console.log(remainder);

// 6, power
let power = 2**10;
console.log(power);

// Assignment operators
// 1, Assignment 
let x = 5;
console.log(x)

// 2, addition Assignments
let y = 5;
console.log(y);

// 3, Subtraction assignment
let z = 10;
z -=2;
console.log(z);

// Logical operators
// AND (&&): Returns true if both operands are true 
let isTrue = (5 > 3 && 3 > 5);
// OR (||): Returns true if at least one operand is true
let istrue = (5 > 3 && 3 > 5); // true
// NOT (!): Returns true if the operand is false

//Control Structures
// 1. Conditional Statements

//if statement: Executes a block of code if a specified condition is true
let xx = 4

if (xx > 0) {
    console.log('x is positive');
}
//if....else statement: Executes a block of if a specified condition is true, otherwise anothe block of code is executed

if (xx > 0) {
    console.log('x is positive')
} {
    console.log('x is not positive');
}
// else if statement: Adds a new condition tp test if the first condition is false.

if (xx > 0) {
    console.log('x is positive');
} else if (x === 0) {
    console.log('x is Zero')
} else {
    console.log('x is negative');
}

let temperature = 15;
if (temperature > 25) {
    console.log("it's a cold day!")
}else if (temperature < 15) {
    console.log("It's a cold day!")
}else {
    console.log("it's a warm day!")
}

let fruit = "apple";
switch (fruit){
     case "banana":
        console.log("it's a banana!");
        break;
     case "apple":
            console.log("it's an apple!");
            break;
     case "orange":
            console.log("it's an orange!");
            break;
       default:
        console.log("unknown fruit")               
}