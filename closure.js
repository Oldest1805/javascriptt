// closure is a feature in javascript where an inner function has
// access to the variable of its  outer function, even after the 
// outer fuction has unfinished executing

// function outerFunction(){
//     const outerVariable = 'I am from outer Function';

//     function innerFunction(){
//         console.log(outerVariable)
//     }

//     return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction();

// function createCounter() {
//     let counter = 0;

//     return function() {
//         counter++;
//         return counter;
//     };
// }

// const counterFunction2 = createCounter();
// console.log(counterFunction());
// console.log(counterFunction());
// console.log(counterFunction());


function createCounter(){
    let counter = 0;

    return {
        increment: function() {
            counter++;
            return counter;
        },
        decrement: function() {
            counter--;
            return counter;
        },
        getCount: function() {
            return counter;
        }
    }
}

const counterFunction = createCounter();
console.log(counterFunction.increment());
console.log(counterFunction.increment());
console.log(counterFunction.decrement());
console.log(counterFunction.decrement());
console.log(counterFunction.getCount());

