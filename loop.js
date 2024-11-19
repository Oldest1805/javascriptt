// A loop is a programming construct used to repeat a block of code multiple
// times until a specific condition is met. Loops help automate reptitive tasks.

// for Loop: The for loop is ideal when you know in advance how many times you want to 
// repeat a block of code.
//for (initialization; condition; increment) {
    // code to be executed


// nitialization: let i = 0 sets the starting point.
//condition: i < 5 keeps the loop running while i is less than 5.
//increment: i++ increase i by 1 after each loop iteration.

//for (let i = 0; i < 5; i++) {
   // console.log(i); // Outputs: 0, 1, 2, 3,4


const fruits = ["apple", "banana", "orange", "mango", "grape"];

for (let i = 0; i < fruits.length; i++) {
    if (i===3) continue;
    console.log(fruits[i]);
}



// while Loop: The while loop is used when the number of iterations isn't known beforehand.it keeps running as long as the condition is true.
//while (condition){
    // code to be executed
//}
