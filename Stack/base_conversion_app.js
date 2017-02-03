//Base conversion algorithm

/*
1. The rightmost digit of n is n % b. Push this digit onto the stack.
2. Replace n with n / b.
3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
4. Build the converted number string by popping the stack until the stack is empty.
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


//base conversion using stack

function baseConversion(number, converToBase)
{
    //create the stack
    var stack = new Stack();
    var output = "";

    do
    {
        stack.push(number % converToBase);
       
        number = Math.floor(number = number / converToBase);

    }while(number>0);

    while(stack.length()> 0)
    {
        output = output + stack.pop();
    }
    return output;
}






//test the app
var result = baseConversion(10, 2);
console.log("Converting 10 to base 2: " + result);