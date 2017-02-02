//non array generating iterators

//forEach - takes a function as an args and applies the function to each element

function rootSquare(num)
{
    console.log("Square of " + num + " is ", num * num);
}

var numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(rootSquare);

//every()- applies a boolean function and returns true or false

function isEven(num)
{
    return num % 2 == 0;
}

var test = numbers.every(isEven);

if(test)
{
    console.log("All numbers are even");
}
else
{
    console.log('All numbers are not even');
}

//some() - similar to every() but if only one applies to the rule returns true or false

var test2 = numbers.some(isEven);

if(test2)
{
    console.log("At least one number is even");
}
else
{
    console.log('No number is even');
}

//reduce() - accumulator used to sum the array

function sum(current_value, total_value){

    return total_value + current_value;
}
console.log(numbers);
var sum = numbers.reduce(sum);
console.log("Sum is :" + sum);





