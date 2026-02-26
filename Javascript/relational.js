//Relational Oeprators -> Comparison Operators
// >,<,>=,,<=
//Equality Oprators ==(Abstract Equality),===(Strict Equality)

let result = 10 > 5;
console.log("The result is ",result);

result = 10 < 5;
console.log("The result is ",result);

result = 10 <= 5;
console.log("The result is ",result);

result = 10 >= 5;
console.log("The result is ",result);

// Equality Operators

let a = 5==5;
console.log("The result of a is ",a);

a = 5 == "5";
console.log("The result of a is ",a);

a = 5==="5";
console.log("The result of a is ",a);

// Relational Vs Logical

a = 150;
let b = 10;
let c = 500;
let d = 80;
result = (b > c) && (b > d); // true

result = (c > b) || (d < 5); // false

result = ((a > b ) && (d > c)) || (a < c);

// Conditional Operators - Trinary Operators (It involves 3 oprators)

result = (a > b) ? "I am good" : "I am too good!";
console.log("Good result is ",result);

// Find the greatest number of two numbers
// a = 50;
// b = 40;
result = a>b?a:b;
console.log("The greatest number is ",result);

// Find the greatest number b/w three numbers;

//result =(a>b)?((a>c)?a :c) : ((b>c)?b:c)

result = ((a > b) && (a > c)) ? a : (( b > c) ? b :c);

console.log("The greatest number is ",result);

// Find the greatest number b/w Four numbers;





 
