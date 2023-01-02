// Follow along with the examples here
// Declaring a function
function doNothing() {};

function sayHello() {
  console.log("Hello!");
};

// Calling a function
sayHello();

// Using arguments and parameters
function doSomething(thing) {
  console.log(thing);
};

doSomething("anything");

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");
say("Julio", "hello");

// Default values for parameters
function sayHelloTo(firstName = "John") {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo();
sayHelloTo("Guadalupe");

// Using the return keyword
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(2, 3)); // 5
console.log(add(5, -3)); // 2
console.log(add(5, 5)); // 10

let greeting = "Hello";

// Variable scope
function sayHello() {
  let greeting = "Hello";
  console.log(greeting);
}

sayHello();
console.log(greeting);
