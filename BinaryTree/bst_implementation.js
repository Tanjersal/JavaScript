function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.displayNode = displayNode;
}

function displayNode() {
   return this.data;
}

function BST() {
   this.root = null;
   this.insert = insert;
   this.inOrder = inOrder;
   this.preOrder = preOrder;
   this.postOrder = postOrder;
   this.getmin = getmin;
   this.getmax = getmax;
   this.find = find;
   this.remove = remove;
   this.removeNode = removeNode;
   this.getSmallest = getSmallest;
}


function insert(data) {
   var n = new Node(data, null, null);
   if (this.root == null) {
      this.root = n;
   }
   else {

      var current = this.root;
      var parent;

      while (true) {

         parent = current;

         if (data < current.data) {
             //go left
            current = current.left;

            if (current == null) {

               parent.left = n;
               break;
            }
         }
         else {
             //go left
            current = current.right;

            if (current == null) {

               parent.right = n;
               break;
            }
         }
      }
   }
}

function inOrder(node) {
   if (!(node == null)) {
      inOrder(node.left);
      console.log(node.displayNode() + " ");
      inOrder(node.right);
   }
}

function preOrder(node){

    if(!(node==null)){

        console.log(node.displayNode() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node){

    if(!(node==null)){

        postOrder(node.right);
        postOrder(node.left);
        console.log(node.displayNode() + ' ');
    }
}

//function to find min in left nodes - as smalls are inserted there
function getmin(){

    var current = this.root;

    while(!(current.left ==null)){

        //go left
        current = current.left;
    }

    return current.data;
}

//function to find max in right nodes - as max are inserted there
function getmax(){

    var current = this.root;
    while(!(current.right ==null)){

        current = current.right;
    }
    return current.data;
}

//find a node 
function find(item){

    var current = this.root;

    while((current.data != item)){

        if(item < current.data){

            //go left 
            current = current.left;
        }
        else{

            //go right
            current = current.right;
        }
        if(current == null){

            return null;
        }
    }

    return current.data;
}

//function that calls the removeNode function

function remove(data){

    var root = removeNode(this.root, data);
}

//function to get getSmallest node left
function getSmallest(node){

    if(node.left == null){
        return node;
    }
    else{
        //recursive call to get getSmallest left node
         return getSmallest(node.left);
    }
}

//function to removeNode
function removeNode(node, data){

    //if no node(bst is new)
    if(node == null){
        return null;
    }

    //if found node
    if(data == node.data){

        //case: node has no children 
        if((node.left == null) && (node.right == null)){
            return null;
        }

        //case: node has no left children 
        if(node.left==null){
            return node.right;
        }

        //case: node has no right children
        if(node.right == null){
            return node.left;
        }

        //node has 2 children -find the smallest successor 
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);

        return node;
    }
    else if(data < node.data){ 

        //recursive call to delete right
        node.left = removeNode(node.left, data);
        return node;
    }
    else{

        //recursive call to delete right
        node.right = removeNode(node.right, data);
        return node;
    }

}

var nums = new BST();

nums.insert(22);
nums.insert(30);
nums.insert(56);
nums.insert(81);
nums.insert(77);
nums.insert(92);
nums.insert(10);

// console.log('inOrder Traversal: ');
// inOrder(nums.root);

// console.log('preOrder Traversal: ');
// preOrder(nums.root);

// console.log('postOrder Traversal: ');
// postOrder(nums.root);

max = nums.getmax();
min = nums.getmin();
console.log('Max value: ' + max);
console.log('Min value: ' + min); 

console.log('inOrder Traversal: ' );
inOrder(nums.root);

console.log('Searching for number 81: ');
if(nums.find(81)){

    console.log('81 was found');
}
else{
    console.log('Not found');
}
console.log('Deleting 92: ');
nums.remove(92);
inOrder(nums.root);



