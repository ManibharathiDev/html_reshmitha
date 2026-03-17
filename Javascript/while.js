//While Loop
//for(initialiization; condition;incre/decre)
//{}
//initialization
//while(condition){
// statement;
// incr/decr
//}
//Print N numbers --- 1....10
let a = 1; //Initialization
while(a<=10)
{
    console.log(a);
    a++;
}

//Sum of N number 1....5
let sum = 0;
a = 1;
while(a<=5)
{
    sum = sum + a;
    a++;
}
console.log("Sum of First 5 Numbers ",sum);

// Sum of the digits
// 123 => 1+2+3 = 6
// 123 => 1 -> 23, 2 -> 3
// 123 => 123%10 => 3,
// 123/10 => 12
// 12 => 12%10 => 2 = 1
// 1 => 1%10 => 1
// 1/10 => 0
//

let num = 509; // 5678
let sumDigit = 0;
while(num > 0){

    mod = num % 10; // 123 % 10 => 3 ; mod = 12 % 10 => 2; 1%10 =>1
    sumDigit = sumDigit + mod; // sumDigit = 0 + 3 => 3 => sumDigit = 3 + 2 => 5; 5+1 => 6
    num = parseInt(num / 10); // num = 123/10 => 12 // num = 12 / 10 => 1; 1/10 = 0;
    
}
console.log("Sum of the digits ",sumDigit);

// Reverse the digits
// 123 => 3*10 => 30 =>
// 12 => 2 *10 => 20 => 320
// 1 => 321

// 121 => 121 
// MALAYALAM => 

// DO - WHILE
let range = 15;
do{
   console.log(range); 
   range++;
}while(range < 10);

// While -> Entry level
// do-while -> Exit level

// DOM -> Document Object Model


//DOUCMENT -> HTML-> BODY -> H1,DIV -> CLASS -> ID
// Validation -> EMAIL, MOBILE NUMBER
// Accessing the HTML elements