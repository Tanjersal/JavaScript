//palindrome is a word that have the same meaning when read forward or backword

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


function checkPalindrome(word)
{
    //create the stack 

    var stack = new Stack();
    
    //add the word 
    for(var i=0; i<word.length; i++)
    {
        stack.push(word[i]);
    }

    var reversedWord = "";

    while(!stack.isEmpty())
    {
        reversedWord = reversedWord + stack.pop();
    }

    if(reversedWord === word)
    {
        console.log('This word ' + word + " is a Palindrome which is " + reversedWord);
    }
    else
    {
        console.log('This word ' + word + " is not a Palindrome reversed is " + reversedWord);
    }

}


//testing

checkPalindrome('racecar');
checkPalindrome('dad');
checkPalindrome('Fabien');
checkPalindrome('Burkina Faso');