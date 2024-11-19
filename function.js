function multiply(a,b){
    return a*b;
}
const product = multiply(5,10)
console.log(product);

// function declaration starts with a function keyword accepts parameter and reuturns an output
// function expression is a type of function is assigned to a variable and the variable beecomes the name of the function

function diff(a,b){
    return a - b;
}
const minuz = diff(8,4)
console.log(minuz);

function user(name, coourse){
    console.log("Hello " + name, "you are " + coourse);
}

user("martins", "frontend");

const add = function(a, b) {
    return a + b;
}
const sum = add(1, 2);
console.log(sum);

const product1 = function(a,b){
    return a+b
} 
const multiply1 = product1(2, 3);
console.log(multiply1);

function user(name, course, school){
    console.log("Hello " + name, "I Am  " + course,  "i work at " +school);
}

user("oluwaseun", "frontend", "new-horizons" );

//DOM: used to manipulate documents to perform specific tasks