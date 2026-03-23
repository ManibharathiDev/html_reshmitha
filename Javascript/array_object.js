let name = ["Sandy","John","Michael"];

//Object : Real World Entity : Name=Reshmitha, age : 25, Qualification:MCA.....

// let person = {"name":"Reshmitha","age":25,"role":"Developer"}

let person = {"name":"Reshmitha","age":25,"role":"Developer"};

console.log(person);
console.log(person.name);

// Array of Objects

let employee = [
    {"name":"Reshmitha","age":25,"role":"Developer"},
    {"name":"Gayatri","age":45,"role":"Tester"},
    {"name":"John","age":28,"role":"AI Developer"}
];

// Find the highest age employee
// let numbers = [10,12,34,56,19,45,67,89,43];

console.log(employee);

//console.log(employee.name); // Undefined

// console.log(employee[0].name);
// console.log(employee[1].name);

for(let i = 0; i< employee.length; i++)
{
    console.log("Employee ",employee[i].name);
    console.log("Role ",employee[i].role);
}

let average = 0;
let total = 0;
for(i=0;i<employee.length;i++){
 total = employee[i].age + total;
}
average = total/employee.length;
console.log(total);
console.log(average);

// Nested Arrays and Objects

// let persons = {
//     name:"Sandy",
//     age:30,
//     qualification:["BSC","MCA","MBA","AI/ML"]
// };

let persons = {
    name:"Sandy",
    age:30,
    qualification:[
        {
            "degree":"BSC",
            "college":"NI Arts",
            "year":2010
        },
        {
            "degree":"MCA",
            "college":"IRTT",
            "year":2013
        },
        {
            "degree":"MBA",
            "college":"PSG Tech",
            "year":2017
        }
    ]
};

console.log(persons);
console.log(persons.qualification);
console.log(persons.qualification[0]);

for(i=0;i<persons.qualification.length;i++){
console.log(persons.qualification[i]);
}

