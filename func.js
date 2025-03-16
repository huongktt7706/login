// 1.Tinh co ban
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Exponentiation:", a ** b);
console.log("Modulo:", a % b);

// 2. Assignment operators
let x = 10;
x += 5; // x = x + 5
console.log("x after assignment:", x);

// 3. Data types
let number = 100; 
let text = "Hello JS"; 
let isTrue = true; 
let array = [1, 2, 3, 4]; 
let obj = { name: "Huong", age: 20 }; 
console.log(number, text, isTrue, array, obj);

// 4. Func
function add(a, b) {
    return a + b;
}
console.log("Regular function:", add(3, 7));

const multiply = (a, b) => a * b;
console.log("Arrow function:", multiply(4, 5));


let person = {
    name: "Huong",
    sayHello: function() {
        console.log("Hello, I am " + this.name);
    }
};
person.sayHello();
