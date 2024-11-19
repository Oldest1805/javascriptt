var name = 'seun';
console.log(name);

let number = 12;
let int = 59;
let float = 2.3;
var isMan = Boolean;
let isMarried = false;
let isSingle = true;
var age;
var isTall = null;
isTall = true;

console.log(number, int, float);
console.log(`this is ${name} and this is ${int}`);
console.log(`this is ${name} Is he married? ${isMarried}`);
console.log(age, isTall);

var info = ["seun", "24", true, null];
console.log(info);
console.log(info["0"]);
console.log(info["1"]);
console.log(info["2"]);
console.log(info["3"]);

const user = {
    id: 1,
    name: "Seun",
    age: 24,
    isMarried: false,
    email: "adebayoseun1805@gmail.com",
    password: "1234",
    Phone: "12334456",
    address: {
        street: "123 Main St",
        city: "Lagos",
        state: "Lagos",
        postalcode: "00001",
        country: "Nigeria"
    },
    dateOfBirth: "1997-11-03",
    isActive: true,
    roles: ["user", "admin"],
    lastLogin: "2024-10-14T10:30:00Z"
};