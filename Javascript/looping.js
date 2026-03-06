// Looping or Iteration
// Iterate the statement till the reach condition
// for loop
// for(initializtion;condition;incr/dec)
//{
//    Statment;
//}

let a = 0;
for(a = 0; a<5; a++)
{
    console.log("The value of a is ",a);
}

for(b = 1; b<=10; b++)
{
    //console.log(a+"*2="+(a*2));
    console.log( "2*",b,"=" , 2*b);
}

// Print even numbers from 1 to 10;

for(c = 1; c<=10;c++)
{
    if(c%2 == 0)
    {
        console.log(c);
    }
}

for(c = 2; c<=10;c=c+2)
{
    
    console.log(c);
    
}

//Print ODD number
for(c = 1; c<=10;c=c+2)
{
    console.log(c);
    // if(c%2 != 0)
    // {
    //     console.log(c);
    // }
}

// Sum of N numbers N = 5;
// 1,2,3,4,5 => 1+2=3+4+5 = 25
