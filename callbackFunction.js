// Definition: A callback  is a function passed into
// another function as an argument, which is then
// invoked inside the outer
// function to complete some kind of routine or action.
// Function definition with a callback parameter

function sayHello(name, callback){
    console.log(`Hello ${name}`)
    callback();
}

function sayGodbye() {
    console.log('Welcome to my APP')
}

sayHello("Martins", sayGodbye);

const greet = (name, callback) => {
    console.log(`Hello ${name}`)
    callback();
}

const question = () => {
    console.log('how are you doing')
}

greet("Laide", question)

const greetUser = (name, firstCallback, secondCallback) => {
    console.log('Hello ${name}')
    firstCallback()
    secondCallback()
}

const welcomeMessage = () =>{
    console.log('welcome to our app')
}

const offerService = () => {
    console.log('pls how can we help you ?')
}

greetUser("martins", welcomeMessage, offerService)

//name, course and school, company

const greetUser1 = (name, courseandschool, company) => {
    console.log(`My name is ${name}`)
    courseandschool()
    company()
}

const courseandschool = () =>{
    console.log('welcome to our app')
}

const company = () => {
    console.log('i work at new horizions')
}

greetUser1("seun", courseandschool, company)