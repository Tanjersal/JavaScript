//doubly linked list implementation

function LinkNode(element){

    this.element = element;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(){

    this.head = new LinkNode('head');
    this.find = find;
    this.insertAfter = insertAfter;
    this.remove = remove;
    this.findLast = findLast;
    this.displayListBackward = displayListBackward;
    this.displayListForward = displayListForward;   
}


function insertAfter(newValue, value){

    var newNode = new LinkNode(newValue);

    var current = this.find(value);

    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;
}


function remove(value){

    var current = this.find(value);

    while(current.next !=null){

        //this deletes the node 
        current.prev.next = current.next;
        current.next.prev = current.prev;

        current.next = null;
        current.prev = null;
    }

    
}

//find last - helper function to go at the last item in list
function findLast(){

    var current = this.head;

    while(current.next != null){

        current = current.next;
    }

    return current;
}

function find(value){

    var current = this.head;

    while(current.element !=value){

        current = current.next;
    }

    return current;
}

function displayListForward(){

    var current = this.head;

    while(current.next !=null){
        
        console.log(current.next.element);

        current = current.next;
    }
}

function displayListBackward(){

    var current = this.head;

    //set to the last node 
    current = this.findLast();

    while(current.prev != null){

        console.log(current.element);
        current = current.prev;
    }
}



//test program 

var itinary = new DoublyLinkedList();

itinary.insertAfter('Ouagadougou', 'head');
itinary.insertAfter('Paris', 'Ouagadougou');
itinary.insertAfter('Chicago', 'Paris');
itinary.insertAfter('Sioux Falls', 'Chicago');
itinary.insertAfter('SDSU', 'Sioux Falls');

itinary.displayListForward();
console.log('\n');
itinary.displayListBackward();

console.log('\n');
itinary.remove('Sioux Falls');
itinary.remove('Ouagadougou');

itinary.displayListForward();
console.log('\n');
itinary.displayListBackward();
