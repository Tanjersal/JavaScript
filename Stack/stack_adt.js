//implementation of stack using array

//stack constructor
function Stack()
{
    this.stackArray = [];
    this.top = -1;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.isEmpty = isEmpty;
    this.clear = clear;
    this.length = length;
}

//push function
function push(item)
{

    this.stackArray[++this.top] = item;
}

//pop function

function pop()
{

    return this.stackArray[this.top--];
}

//peek function
function peek()
{
    return this.stackArray[this.top]; //top
}

//isEmpty function

function isEmpty()
{
    return this.top == -1;
}

//length function

function length()
{
    return this.top + 1;
}

//isFull

function isFull()
{
    return this.top == this.stackArray.length - 1;
}

//function clear
function clear()
{
    this.top = 0;
    delete this.stackArray;
    this.stackArray = [];
}


//testing

var food = new Stack();

food.push('Hamburger');
food.push('Fries');
food.push('Coke Cola');
food.push('Ice cream');

console.log("Length of stack: " + food.length());

console.log("Top of stack: " + food.peek());

console.log('Removed top 1: ' + food.pop());
console.log('Removed top 2: ' + food.pop());

console.log('New Stack: ' + food.length());

//display remaining element 

while(!food.isEmpty())
{
    var removed = food.pop();
    console.log('Remaining in stack: ' + removed);
}

console.log("Stack is empty: " + food.isEmpty());