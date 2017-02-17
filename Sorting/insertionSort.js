//implementing array class for sorting algorithms
//insertionSort - select the first one to be temp and compare with the remaining

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


//testing 

var numElem = 10;

var mytest = new ArrayClass(numElem);
mytest.setData(mytest)
console.log(mytest.toString());
mytest.insertionSort();
console.log(mytest.toString());
