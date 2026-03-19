let num = [11,21,31,41,51]; // num[0],num[1],num[2] .. 0...4
//Sum of the array => 15
//
// console.log("Length of the array ",num.length);

let sum = 0;
for(let i = 0; i<num.length; i++){
    sum = sum + num[i];
}
console.log("Sum of the array is ",sum);

// Print only even numbers;

// let a = [2,3,5,7,9,10,12,56,78]

// for(i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         console.log(a[i]);
//     }
// }
// Try Reverse the array
num = [11,21,31,41,51]; 
let reverse = []; reverse[0] = num[4]
for(i=num.length-1;i>=0;i--){
    reverse[(num.length)-(i+1)]  = num[i]; // reverse[0] = num[4]
                                            //reverse[5-(3+1)]
                                            //reverse[1] = num[3]
}
console.log(reverse);
let rev = [];
for(let i = 0; i<num.length;i++){
    rev[i] = num[num.length-(i+1)];
}
console.log(rev);