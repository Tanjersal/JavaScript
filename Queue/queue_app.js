// implementation of the queue

//implementation of a queue using array

function queue(){

    this.arr = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

//function enqueue - add back of queue
function enqueue(value){
    
    this.arr.push(value);
}

//function dequeue - delete front of queue 
function dequeue(){

   return this.arr.shift();
}

//function front - display front of the queue

function front (){

    return this.arr[0];
}

//function back - display back of the queue 

function back(){

    return this.arr[this.arr.length - 1];
}

//function toString - display string representation of the array

function toString(){

    var retStr = "";

    for(var i=0; i< this.arr.length; i++){

        retStr = retStr + this.arr[i] + '\n';
    }

    return retStr;
}

//function empty - check if is empty 
function empty(){

    if(this.arr.length==0){

        return true;
    }
    else{

        return false;
    }
}


//test program

var q = new queue();

q.enqueue('Fabien');
q.enqueue('Arnaud');
q.enqueue('Jerome');
q.dequeue();
q.enqueue('Nadia');
q.enqueue('Mami foutu');
console.log(q.toString() + '\n');

console.log("Back of the queue: " + q.back());
console.log("Front of the queue: " + q.front());
console.log('Empty: ' + q.empty());