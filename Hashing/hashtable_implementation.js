//hash table class implementation - using prime number for array size
//if key is integer - return modulo arraySize - modular hashing
//if key is string - used ascii for each letter and then modulo arraySize

function HashTable(){

    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.put = put;
   // this.get = get;
    this.showTable = showTable;
}

//function simpleHash

function simpleHash(data){

    var total=0;

    //sum up the ascii code of each character
    for(var i=0; i<data.length; i++){

        total = total + data.charCodeAt(i);
     }

     console.log('Hash Value: ' + data + '--->' + total);
     //modulo arraySize
     return total % this.table.length;
}


//function put 
function put(item){

    var hashed = this.simpleHash(item);
    this.table[hashed] = item;
}

//function showTable

function showTable(){

    for(var i=0; i< this.table.length; i++){

        if(this.table[i] != undefined){

            console.log(i + ' ' + this.table[i]);
        }
    }
}

//test function

var hashT = new HashTable();

var names = ["Flex", "George", "Donnie", "Raymond", "Russell", "Mike", "Clayton", "Danniel", "Emilie"];

for(var i=0; i< names.length; i++){

    hashT.put(names[i]);
}

hashT.showTable();