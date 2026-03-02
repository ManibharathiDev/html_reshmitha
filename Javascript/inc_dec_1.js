// let a = 10;
// let b = a++ + a++;
// console.log("A is ",a);
// console.log("B is ",b);

// let a = 10;
// let b = a++ + a++;
// let c = b++ + b++;
// console.log("A is ",a); // 11
// console.log("B is ",b); // 21
// console.log("C is ",c); // 43

let a = 10;
let b = a++; // b = 10 , a = 11
let d = a++ + b++; // 11 + 10 => d = 21 ,b = 11, a = 12
let c = a++ + b++ + a++; // 13 +  11  +  12, c= 36 , a = 14, b = 12

console.log("A is ",a); // 14
console.log("B is ",b); // 12 
console.log("C is ",c); // 38
console.log("D is ",d); // 22


let a = 20;
let b = a-- + a--;
console.log("A is ",a);
console.log("B is ",b);



