//implementing a hash table with key and value 
//get function is implemented

function HashTable(){

    this.table = new Array(137);
    this.BestHash = BestHash;
    this.put = put;
    this.get = get;
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


//function put - hash the key and store the value
function put(key, value){

    var hashed = this.BestHash(key);
    this.table[hashed] = value;
}

//function get - re-hash the key to retrieve the value
function get(key){

    var hashedKey = this.BestHash(key);
    return this.table[hashedKey];
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

var phoneBook = new HashTable();
phoneBook.put('Fabien', 62675766242);
phoneBook.put('Nadia',2267409776);
phoneBook.put('Willy', 1342);

phoneBook.showTable();
console.log('\n');

console.log(phoneBook.get('Fabien'));
console.log(phoneBook.get('Willy'));