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
    this.gaps = [5,3,1]; //sorting using Marcin Ciura algorithms
    this.shellSort = shellSort;
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

//shellSort
function shellSort() 
{
    for(var g=0; g<this.gaps.length; g++){

        for(var i=g; i<this.arr.length; i++){

            var temp = this.arr[i];

            for(var j=i; j>=this.gaps[g] && this.arr[j-this.gaps[g]]>temp; j-=this.gaps[g]){

                this.arr[j] = this.arr[j-this.gaps[g]];
            }

            this.arr[j] = temp;
        }
    }
}


//testing 

var numElem = 10;

var mytest = new ArrayClass(numElem);
mytest.setData(mytest)
console.log(mytest.toString());
var start = new Date().getTime();
mytest.shellSort();
var end = new Date().getTime();
var diff = end - start;
console.log(mytest.toString());
//console.log('Timing in milliseconds is: ' + diff);
