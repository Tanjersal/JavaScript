//push, unshift, pop,, shift, splice, sort, reverse

var nums = [1,2,3,4,5,6];

console.log(nums);

//push adds an item to the end of array

nums.push(15);
nums.push(10);
nums.push(20);

console.log(nums);

//unshift - adds an items to the beginning the array

nums.unshift(0);
nums.unshift(100);
nums.unshift(50);

console.log(nums);

//pop - removes items from end of array

var removed1 = nums.pop();
var removed2 = nums.pop();

console.log("First number removed from end: "+ removed1);
console.log("second number removed from end: " + removed2);

console.log(nums);

//shift - removes items from beginning of the array
var removed3 = nums.shift();
var removed4 = nums.shift();

console.log("First number removed from beginning: " + removed3);
console.log('Second number removed from beginning: ' + removed4);

console.log(nums);


//splice can be used to add or delete from the middle

//add 300 from pos 2

add = 300;

nums.splice(3, 0, add);
//nums.splice(3,0, 300);
console.log(nums);

//remove 3 numbers starting pos 3

nums.splice(3, 4);

console.log(nums);

//reverse 

nums.reverse();
console.log(nums);

//sorting - sort() sorts data lexicographically
//works well with strings

noms = ['Fabien', 'Arnaud', 'Philipe'];
noms.sort();
console.log(noms);

//with numbers not great we need a function 
anotherArray = [3,1,2,100,4,200];
anotherArray.sort();
console.log(anotherArray);

//to sort numerically we create a function compare
//substract two nums and returns negative, 0 or positive

function compare(num1, num2)
{
    return num1 - num2;
}

anotherArray.sort(compare);
console.log(anotherArray); //sorted