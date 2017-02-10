//set implementation - union, intersect, subset, difference
//union - creates a second array and check element between arrays

function Set(){

    this.arr = [];  
    this.union = union;
    this.intersect = intersect;
    this.difference = difference;
    this.subset = subset;
    this.add = add;
    this.remove = remove;
    this.displaySet = displaySet;
    this.contains = contains;
    this.size = size;
}

//function add - checks if number is in array before add op
function add(item){

    //if element is not in array - add and return true
    if(this.arr.indexOf(item) == -1){

        this.arr.push(item);
        //console.log('Item ' + item + ' added!');
        return true;
    }
    else {

        //console.log('Item ' + item + ' already in set');
        return false;
    }
}

//function remove - checks if number is in array before deletion
function remove(item){

    var itemPos = this.arr.indexOf(item);

    //if element is in array - delete it with splice
    if(itemPos > -1){

        this.arr.splice(itemPos, 1);
       // console.log('Item ' + item + ' removed!');
        return true;
    }
    else{
         //console.log('Item ' + item + ' was not in the set');
        return false;
    }
}

//function contains - used to check if a number is in a set

function contains(item){

    if(this.arr.indexOf(item) > -1){
        return true;
    }
    else{
        return false;
    }
}

//function union 
function union(set){

    var tempSet = new Set();
    for (var i = 0; i < this.arr.length; ++i) {
        tempSet.add(this.arr[i]); 
    }
    for (var i = 0; i < set.arr.length; ++i) { 
        if (!tempSet.contains(set.arr[i])) {
        tempSet.arr.push(set.arr[i]);
    } 
}
return tempSet; 
}

//function size()

function size(){

    return this.arr.length;
}

//function subset
function subset(set){

    if(this.size() > set.size()){

        return false;
    }
    else{

        for(member in this.arr){

            if(!set.contains(member)){

                return false;
            }
        }
    }

    return true;
}

//function difference
function difference(set){

    var tempSet = new Set();

    for(var i=0; i<this.arr.length; i++){

        if(!set.contains(this.arr[i])){

            tempSet.add(this.arr[i]);
        }
    }
    
    return tempSet;
}

//function intersect

function intersect(set){

    var tempSet = new Set();
    for(var i=0; i<this.arr.length; i++){

        if(set.contains(this.arr[i])){

            tempSet.add(this.arr[i]);
        }
    }

    return tempSet;
}

function displaySet(){

    for(var i=0; i< this.arr.length; i++){

        console.log(this.arr[i]);
    }
}

//test program

var set = new Set();

console.log('1st set');
set.add('Microsoft');
set.add('Amazon');
set.add('Omnitech');
set.add('Sencore');

set.displaySet();

console.log('\n');

set.add('Microsoft');
set.remove('Amazon');
set.displaySet();

console.log('\n');
var set2 = new Set();

console.log('2nd set');
set2.add('Microsoft');
set2.add('EDF');
set2.add('Sonabel');
set2.add('Dassault');

set2.displaySet();

console.log('\n');

var set3 = new Set();
console.log('Union set');
set3 = set2.union(set);

set3.displaySet();

console.log('\n');
var set4 = new Set();

console.log('Intersect set');
set4 = set3.intersect(set);

set4.displaySet();
console.log('\n');

var set5 = new Set();

set5 = set3.difference(set4);
console.log('Difference set');
set5.displaySet();

console.log('\n');

var s = new Set();
console.log('Subset set');
s = set.subset(set5);
console.log('Is 1st set a subset of set5 ?: ' + s);

