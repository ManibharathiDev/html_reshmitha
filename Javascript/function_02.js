let a = 20; // Global Variable

function display()
{
    a = 30;
    console.log(a);
}

console.log(a);

display();

console.log(a);