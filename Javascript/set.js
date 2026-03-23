//set
// Set is a collection of unique values
// let array = [1,2,1,4,5,6,7,6,8,9,2]

//
let numbers = new Set([1,1,2,2]);

console.log(numbers);

numbers.add(3);
console.log(numbers);
numbers.add(3);
console.log(numbers);

let a = 5;
let b = 6;

numbers.add(a);
numbers.add(b);

let name = "John";
numbers.add(name);
console.log(numbers);

// 