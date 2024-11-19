const fruits = ["Apple", "Banana", "Cherry"]

// Adding to the end
fruits.push("mango");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango"]


// Adding to thr beginning
fruits.unshift("Elderberry");
console.log(fruits);

//remove from the end
fruits.pop();
console.log(fruits);

//remove from the beginning
fruits.shift();
console.log(fruits);

//removing from a specific position
fruits.splice(1, 1);
console.log(fruits);

//modify elements
//changing elements in an array
fruits[1] = "Blueberry";
console.log(fruits);

//using for each
fruits.forEach(function(fruit){
    console.log(fruits)
});

let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);

//common array method
// explain some useful array methods like map, filter, reduce, find, includes

//find
let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit); //"Apple"

// includes
let hasCherry = fruits.includes("Cherry");
console.log(hasCherry); // false

// 8. Combining Arrays
// Show how to concatence arrays using concat.
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//9. Sorting arrays
// Explain how to sort arrays with sort.
let sortedFruits = allFruits.sort();
console.log(sortedFruits); 

//10.Reversing arrays
// Explain how to reverse arrays with reverse.
let reversedFruits = allFruits.reverse();
console.log(reversedFruits);

// Using map to create a new array with each element doubled
//const doubledNumbers = numbers2.map(number => number * 2);

//console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const people = [
    { name: "Alice", age: 25 },
    { name: "Seun", age: 30 },
    { name: "Charlie", age: 35 }
];

//using map to create a new array with just the names of the people
const names = people.map(person => person.name);

console.log(names); // ["Alice", "Seun", "Charlie"]

const age = people.map(person => person.age);
console.log(age);



