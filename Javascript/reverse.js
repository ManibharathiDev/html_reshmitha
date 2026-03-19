let reverse = 0;
let num = 121;
let temp = num;
while(num > 0)
    {
    let digit = num % 10; // digit = 3, digit = 2,digit = 1
    reverse = reverse * 10 + digit; // 0+3 => 3 // 3*10 + 2 => 32, 32*10+1 = 321
    num = parseInt(num/10); // 12 // 1 // 0
}
console.log("Reverse the digits are ",reverse);

if(temp == reverse){
    console.log("Polindrome");
}
else{
    console.log("Not a Polindrome");
}


// Polindrome