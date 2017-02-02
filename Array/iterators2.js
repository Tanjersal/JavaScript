//new array generating iterators - map() and filter()

//map() - applies a function to each element in array and return a new one

function addBonus(salary)
{
    return salary = salary + 50;
}

var salaries = [10400, 2800, 10070, 500];

var newArray = salaries.map(addBonus);
console.log(newArray);//[ 10450, 2850, 10120, 550 ]

function accronyms(name)
{
    return name[0];//return first letter of name
}

names = ['Burkina', 'Faso'];

var anotherArray = names.map(accronyms);
console.log(anotherArray.join("")); //BF

//filter() - works like every() but returns an array that satisfies the function passed in

function isEven(num)
{
    return num %2 == 0;
}

function isOdd(num)
{
    return num %2 !== 0;
}

var arrayNum = [1,2,3,4,5,6,7,8,9];

var returnedArr = arrayNum.filter(isEven);
console.log('Even numbers: ' + returnedArr); //Even numbers: 2,4,6,8

var returnedArr2 = arrayNum.filter(isOdd);
console.log("Odd numbers: " + returnedArr2); //Odd numbers: 1,3,5,7,9


//another example 

function failingGrades(num)
{
    return num <=60;
}

var grades = [];

for(var i=0; i< 10; i++){

    grades[i] = Math.floor(Math.random() * 101);
}

console.log('Grades: ' + grades);
var failing = grades.filter(failingGrades);
console.log("Failing grades are: " + failing);

//example with string


