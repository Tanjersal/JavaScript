//using separate chaining to add value in hash table
//assign an array for each array cell using chaining function

function HashTable(){

    this.table = new Array(90);
    this.BestHash = BestHash;
    this.put = put;
   //this.get = get;
   this.chaining = chaining;
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

//for each cell in array assign an array
function chaining(){

    for(var i=0; i<this.table.length; i++){

        this.table[i] = new Array();
    }
}


//function put 
function put(item){

    var hashed = this.BestHash(item);
    this.table[hashed] = item;
}

//function showTable

function showTable(){

    for(var i=0; i< this.table.length; i++){

        if(this.table[i][0] != undefined){

            console.log(i + ' ' + this.table[i]);
        }
    }
}

//test program

var hashT = new HashTable();

hashT.chaining();

var names = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan", 'Fabien', 'Arnaud', 'Billy', 'Armand',
'Levi', 'George', 'Hamer', 'Liu', 'Philippe'];

for(var i=0; i< names.length; i++){

    hashT.put(names[i]);
}

hashT.showTable();