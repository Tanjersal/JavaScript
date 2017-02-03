//implementation of a list ADT using an array

/*
size (property) - Number of elements in list
pos (property) - Current position in list
length (property) - Returns the number of elements in list
clear (function) - Clears all elements from list
toString (function) - Returns string representation of list
getElement(function) - Returns element at current position
insert (function) - Inserts new element after existing element 
append (function) - Adds new element to end of list
remove (function) - Removes element from list
front (function) - Sets current position to first element of list
end (function) - Sets current position to last element of list
prev (function) - Moves current position back one element
next (function) - Moves current position forward one element
currentPos (function) - Returns the current position in list
moveTo (function) - Moves the current position to specified position
*/

function listADT()
{
    this.size = 0;
    this.array = [];
    this.pos = 0;
    this.length = length;
    this.clear = clear;
    this.toString = toString;
    this.getElement = getElement;
    this.insert = insert;
    this.contains = contains;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currentPos = currentPos;
    this.moveTo = moveTo;
    this.findElement = findElement;
}


//append function
function append(element)
{
    this.array[this.size] = element;
    this.size++;
}

//remove operation
function findElement(element)
{
    for(var i=0; i< this.array.length; i++)
    {
        if(this.array[i] == element)
        {
            return i; //return the position

        }
    }

    //if not found
    return - 1;
}


function remove(element)
{
    var posFound = this.findElement(element);

    if(posFound > -1)
    {
        this.array.splice(posFound, 1);//remove one element at that position
        this.size--;
        
        return true;
    }

    return false;
}

//length function

function length()
{
    return this.size;
}

//toString function

function toString()
{
    return this.array;
}

//insert function - insert after an element

function insert(item, after)
{
    var foundPos = this.findElement(item);
    if(foundPos > -1)
    {
        this.array.splice(foundPos+1, 0, item);
        this.size++;
        return true;
    }

    return false;
}

//clear function - delete array, sets it back to pristine state

function clear()
{
    delete this.array;
    this.array = [];
    this.size = 0;
    this.pos = 0;
}

//contains function
function contains(element)
{
    for(var i =0; i< this.array.length; i++)
    {
        if (this.array[i] == element)
        {
            return true;
        }
    }

    return false;
}

//list traversal operations


function prev()
{   
    //if we are not at the beginning
    if(this.pos > 0)
    {
        this.pos--;
    }
}

//front of array
function front()
{
    this.pos = 0;
}

//end of array
function end()
{
    this.pos = this.size -1;
}

function next()
{
    //if we are not at the end of array
    if(this.pos < this.size-1)
    {
        this.pos++; //increment
    }
}

function moveTo(position)
{
    this.pos = position;
}

function currentPos()
{
    return this.pos;
}

function getElement()
{
    return this.array[this.pos];
}



//testing of the listADT class

var list = new listADT();

list.append('Fabien');
list.append('Arnaud');
list.append('Nadia');
list.append('Diomande');
list.append('Nakoulma');

console.log(list.toString()); //[ 'Fabien', 'Arnaud', 'Nadia', 'Diomande', 'Nakoulma' ]

list.front();
console.log(list.getElement());// Fabien
list.end();
console.log(list.getElement());//Nakoulma

//get Nadia
list.prev();
list.prev();
console.log(list.getElement()); //Nadia

//contains Flex

var isIn = list.contains('Flex');
if(isIn)
{
    console.log('Yes');
}
else
{
    console.log('No');
}

//moveTo position 
console.log(list.currentPos());//2
list.moveTo(0);
console.log(list.getElement());//Fabien