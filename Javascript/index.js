// Variables
// Operators
// Types of operators
// 1. Arithmetic operators
// 2. Logical Operators
// 3. Relational Operators
// 4. Conditional Operators
// 5. Increment/Decrement
// 6. Bitwise Opertors - Embedded - Hardware oriented
// 7. Assignment Operators =
// +,-,*,/,%

// let firstNumber = 10;
// let secondNumber = 20;
// let result = firstNumber + secondNumber;
// console.log("The result is ",result);

// result = secondNumber - firstNumber;
// console.log("The result is ",result);

// result = firstNumber * secondNumber;
// console.log("The result is ",result);

// result = secondNumber/firstNumber;
// console.log("The result is ",result);

// // % It gives remainder

// result = 10%2;
// console.log("The result is ",result);

// result = 10%3;
// console.log("The result is ",result);
// Swapping between two numbers

let a = 10;
let b = 20;
console.log("Before Swapping");
console.log("The value of a is ",a);
console.log("The value of b is ",b);
console.log("After Swapping");
let temp = a;
a = b;
b = temp;
console.log("The value of a is ",a);
console.log("The value of b is ",b);
//Using arithmetic operators
a = 10;
b = 20;
a = a+b; //10+20 = 30
b = a-b; //30-20 = 10
a = a-b; //30-10 = 20

console.log("The value of a is ",a);
console.log("The value of b is ",b);

a = 10;
b = 20;
a = a+b-(b=a); //10+20-(10) -> 30-10 => 20

a = a*b/(b=a) // 10*20/(10) = > 200/10 => 20

//Logical Operator && ||
// True && True -> True
// True && False -> False
// False && True -> False
// False && False -> False

let result= true && true;
console.log("Resule is ,",result);
result = true && false;
console.log("Result is ",result);
result = false && false;
console.log("Result is ",result);
result = false && true;
console.log(result);

// Logical OR
// True || True => True
// True || False => True
// False || False => False
// False || True => True

result= true || true; 
console.log("Resule is ,",result);
result = true || false;
console.log("Result is ",result);
result = false || false;
console.log("Result is ",result);
result = false || true;
console.log(result);

result = true && false && true;
result = false || true || false;
result = true && true && false && true;
result = false || true || false || false;






 
