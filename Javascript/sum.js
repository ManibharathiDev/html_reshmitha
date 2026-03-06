//Sum of N numbers ... N = 5;
// 0+1+2+3+4+5 => 
// 0+1 => 1
// 1+2 => 3
// 3+3 => 6
// 6+4 => 10
// 10+5 => 15
// sum = 0;
// a = 1; 1<=5, sum = 0+1 => 1
// a = 2; 2<5, sum = 1+2 => 3
// a= 3; 3<=5, sum = 3+3=> 6
// a = 4; 4<=5, sum = 6+4 => 10
// a = 5; 5<=5, sum = 10+5 => 15
// a = 6; 6<=5 ----FALSE

    let sum = 0;
    for(a = 1; a<=5;a++)
    {
       
        // if(sum %2 == 0)
        // {
        //     break;
        // }
        if(a == 3)
        {
            continue;
        }
        sum = sum + a;
        //console.log("A is ",a);
    }
    console.log("The sum of N number is ",sum);

    // Sum of N numbers, but if any point of time, 
    // the current sum is even, stop the loop

