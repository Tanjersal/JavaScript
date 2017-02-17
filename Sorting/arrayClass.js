//implementing array class for sorting algorithms

function ArrayClass(elements){

    this.arr = [];

   
    this.index = 0;
    this.numOfElements = elements;
    this.insert = insert;
    this.clear = clear;
    this.setData = setData;
    this.toString = toString;
    this.swap = swap;
}


//function to insert into array 
function insert(item){

    this.arr[this.index] = item;
    this.index++;
}

//function to set all values of the array to 0
function clear(){

    for(var i=0; i<this.numOfElements; i++){

        this.arr[i] = 0;
    }
}

//function to swap 
function swap(arr, index1, index2){

    var temp =[];

    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//function setData to populate random elemen in array
function setData(){

    for(var i=0; i< this.numOfElements; i++){

        this.arr[i] = Math.floor(Math.random() * this.numOfElements+1);
    }
}

//toString

function toString(){

    var str="";

    for(var i=0; i<this.arr.length; i++){

        str = str + this.arr[i] + ' ';
    }

    return str;
}


//testing 

var numElem = 100;

var mytest = new ArrayClass(numElem);
mytest.setData(mytest)
console.log(mytest.toString());