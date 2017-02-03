//calculate factorial using stack

/*
1. Push numbers by decrementing each time in stack
2. pop and multiply them until stack is empty
*/

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

//stack factorial

function stack_factorial(number)
{
    //create the stack

    var stack = new Stack();

    while(number>1)
    {
        stack.push(number);
        number--;
    }

    var multiply = 1;

    while(!stack.isEmpty())
    {
        multiply = multiply * stack.pop();
    }

    return multiply;
}


//testing

console.log('Factorial of 5 is ' + stack_factorial(5));
console.log('Factorial of 14 is ' + stack_factorial(14));
console.log('Factorial of 9 is ' + stack_factorial(9));
