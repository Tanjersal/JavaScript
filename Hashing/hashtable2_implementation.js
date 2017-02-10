//improved hashtable to avoid collision usgin Horner's method
//multiplying the return total by 37

function HashTable(){

    this.table = new Array(137);
    this.BestHash = BestHash;
    this.put = put;
   // this.get = get;
    this.showTable = showTable;
}

//function simpleHash

function BestHash(data){

    var total=0;
    var Horner = 37;
    //sum up the ascii code of each character
    for(var i=0; i<data.length; i++){

        total = Horner * total + data.charCodeAt(i);
     }

     console.log('Hash Value: ' + data + '--->' + total);
     //modulo arraySize
     return total % this.table.length;
}


//function put 
function put(item){

    var hashed = this.BestHash(item);
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

//test program

var hashT = new HashTable();

var names = ["Flex", "George", "Donnie", "Raymond", "Russell", "Mike", "Clayton", "Danniel", "Emilie"];

for(var i=0; i< names.length; i++){

    hashT.put(names[i]);
}

hashT.showTable();