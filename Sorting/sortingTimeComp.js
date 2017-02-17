//timing the 3 sorting algorithms

function ArrayClass(elements){

    this.arr = [];
    this.index = 0;
    this.numOfElements = elements;
    this.insert = insert;
    this.clear = clear;
    this.setData = setData;
    this.toString = toString;
    this.swap = swap;
    this.insertionSort = insertionSort;
    this.selectionSort = selectionSort;
    this.bubbleSort = bubbleSort;
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

//insertionSort
function insertionSort(){

    var inner;
    var temp;

    for(var outer=1; outer<this.arr.length; outer++){

       temp = this.arr[outer];//stores the first element 

       inner = outer;

       while(inner>0 && (this.arr[inner-1] >=temp)){

           this.arr[inner] = this.arr[inner-1]; //swap values 
           inner--; //go one step behing 
       }

       this.arr[inner] = temp; //insert the new min value which is temp
    }
}

//selectionSort
function selectionSort(){

    var minimum; //min number

    for(var outer=0; outer< this.arr.length-1; outer++){

        minimum = outer; //set first elemen to min

        for(var inner=outer+1; inner<this.arr.length; inner++){

            if(this.arr[inner] < this.arr[minimum]){
                
                swap(this.arr, inner, outer);
            }
        }
    }
}

//bubbleSort
function bubbleSort(){

    var numberOfElem = this.arr.length;

    for(var outer = numberOfElem; outer >=1; outer--){

        for(var inner = 0; inner< numElem-1; inner++){

            if(this.arr[inner] > this.arr[inner+1]){

                swap(this.arr, inner, inner+1);
            }
        }
    }
}


//testing sorting time over 10,000 elements

var numElem = 20000;

var mytest = new ArrayClass(numElem);
mytest.setData(mytest)
console.log('Sorting time for 20,000 elements');

var s= new Date().getTime();
mytest.insertionSort();
var e = new Date().getTime();
var diff2 = e-s;
console.log('InsertionSort time in milliseconds: ' + diff2);

var start1 = new Date().getTime();
mytest.bubbleSort();
var end1 = new Date().getTime();
var diff = end1 - start1;
console.log('BubbleSort time in milliseconds: ' + diff);

var start2 = new Date().getTime();
mytest.selectionSort();
var end2 = new Date().getTime();
var diff1 = end2 - start2;
console.log('SelectionSort time in milliseconds: ' + diff1);



//console.log(mytest.toString());
