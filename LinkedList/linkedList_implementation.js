//node class

function LinkNode(element){

    this.element = element;
    this.next = null;
}

//list class
function LinkList(){

    this.head = new LinkNode("head");
    this.find = find;
    this.insertAfter = insertAfter;
    this.remove = remove;
    this.displayList = displayList;
    this.findPreviousNode = findPreviousNode;
}

//find function

function find(value) {

    var current = this.head;

    while(current.element != value){

        current = current.next;
    }

    return current;
}

//find previous function

function findPreviousNode(value){

    var current = this.head;

    while(current.next != null && current.next.element != value){

        current = current.next;
    }

    return current;
}

//remove function

function remove(item){

    var previousNode = this.findPreviousNode(item);

    if(previousNode.next != null){

        previousNode.next = previousNode.next.next;
    }
}
//insertAfter function

function insertAfter(newValue, value){

    var newNode = new LinkNode(newValue);

    //find the value to insertAfter
    var current = this.find(value);

    newNode.next = current.next;
    current.next = newNode;
}

//displayList function

function displayList(){

    var current = this.head;

    while(current !=null){
        
        console.log(current.element);

        current = current.next;
    }
}


//test program

var cities = new LinkList();
console.log('Current LinkList: ');
cities.insertAfter('Tunisia', 'head');
cities.insertAfter('Ghana', 'Tunisia');
cities.insertAfter('Los Angeles', 'Ghana');
cities.insertAfter('Brookings', 'Los Angeles');
cities.insertAfter('San Francisco', 'Brookings');
cities.displayList();

console.log('\nList after removals: ');
cities.remove('Tunisia');
cities.remove('Brookings');
cities.displayList();