//linear probing - using a second array to store the values

function HashTable(){

    this.table = new Array(90);
    this.BestHash = BestHash;
    this.put = put;
    this.get = get;
    this.values = [];
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

function get(key){

    var hashed = -1;

    hashed = this.BestHash(key);
    if(hashed>-1){

        for(var i = hashed; this.table[hashed] != undefined; i++){

            if(this.table[hashed] == key){

                return this.values[hashed];  
            } 
        }
    }

    return undefined;
}


//function put 
function put(key, value){

    var hashed = this.BestHash(key);
    
    if(this.table[hashed] == undefined){

        this.table[hashed] = key;
        this.values[hashed] = value;
    }
}

//function showTable

function showTable(){

    for(var i=0; i< this.table.length; i++){

        if(this.table[i] != undefined && this.values[i] != undefined){

            console.log(i + ' ' + this.table[i] + ' ' + this.values[i]);
        }
    }
}

//test program

var hashT = new HashTable();

hashT.put('Fabien', 12434);
hashT.put('Sally', 242);
hashT.put('Barck', 5634);
hashT.put('Boly', 353);
hashT.put('Coulibaly', 240);
hashT.put('Perl', 0999);
hashT.put('Atom', 12434344);


hashT.showTable();