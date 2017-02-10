//dictionary class implementation

function dictionary(){

    this.arr = [];
    this.insert = insert;
    this.remove = remove;
    this.find = find;
    this.display = display;
    this.count = count;
    this.clear = clear;
}


//function to add in dictionary

function insert(key, value){

    this.arr[key] = value;
}

//function to delete key in dictionary

function remove(key){

    //delete function - 
    delete this.arr[key];
}

//function to find a value 
function find(key){

    return this.arr[key];
}

function display(){

    for(item in this.arr){

        console.log("Key: " + item + " Value: " + this.arr[item]);
    }
    if(this.arr.length==0){

        console.log('Empty dictionary');
    }
}

function count(){

    var n=0;

    for (item in this.arr){

        n++;
    }

    return n;
}

function clear(){

    for(item in this.arr){

        delete this.arr[item];
    }
}

//test program

var telephone = new dictionary();

console.log('Dictionary is below: ')
telephone.insert('Bourdin', 224);
telephone.insert('Jerome', 216);
telephone.insert('Koli', 33);
telephone.display();

console.log('Find Bourdin: ' + telephone.find('Bourdin'));

telephone.remove('Koli');

console.log('Number of element: ' + telephone.count());
telephone.clear();

telephone.display();

