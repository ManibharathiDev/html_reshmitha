

//Functions

// let a = 10;
// let b = 20;

// let c = a+b;
// console.log(c);

// a = 30;
// b = 40;
// c = a+b;
// console.log(c);

// a = 50;
// b = 60;
// c = a+b;
// console.log(c);

// let d = 60;
// let e = 90;
// let result = d+e;

// Without Return & Without Arguments
function add()
{
    let a = 10;
    let b = 20;
    let c = a+b;
    console.log(c); 
    //Recursive
    //add();
}
let result = add();
console.log(result);

//With return & without arguments
function subtract(){
    let a = 10;
    let b = 20;
    let c = a-b;
    return c;
}
//subtract();
 let sub_result = subtract();
console.log(sub_result);

//Without Return & With Arguments
function multiplication(first,second){
    let a = first;
    let b = second;
    console.log(a*b);
}
multiplication(10,30);
multiplication(100,30);

//With Return & With Arguments
function division(first,second){
    let a = first;
    let b = second;
    return a/b;
}

let div_result = division(10,20);
console.log(div_result);


//Types of Functions
// 1. Without return & without Arguments
// 2. Without return & with Arguments
// 3. With Return & without Arguments
// 4. With Return & With Argument

function array_return(){
    let a = [10,20,30,40];
    return a;
}

let my_array = array_return();
console.log(my_array);

// Scope of the variable - Lifespan

//Calculator
