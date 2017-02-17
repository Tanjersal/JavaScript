//adjency list graph implementation

function Graph(v){

    this.vertices = v; //vertex
    this.edges = 0; //edge 
    this.adjencyRep = []; //array
    this.addEdge = addEdge;
    this.toString = toString;
    this.displayGraph = displayGraph;
    this.depthFirstSearch = depthFirstSearch;

    for (var i=0; i< this.vertices; i++){
        this.adjencyRep[i] = []; //creates the adjency subarray 
        this.adjencyRep[i].push(""); //initialises each array to null
    } 
    this.marked = []; //array to store visited vertices
    for(var i=0; i<this.vertices; i++){

        this.marked[i] = false; //initialises all array to false
    }
}

//function to add vertices 
function addEdge(v,w){
    this.adjencyRep[v].push(w); //find adjency list for v and add w 
    
    if(v!=w){
        this.adjencyRep[w].push(v); //find adjency list for w and add v
    }
    this.edges++; //increment edges
}

//print the graph 

function displayGraph(){

    for (var i=0; i<this.vertices; i++){  

        console.log('Vertex ' +i+' has edges to vertices '); 

        for (var j=0; j<this.vertices; j++){

            if(this.adjencyRep[i][j]!= undefined){

                console.log(this.adjencyRep[i][j] + ' ');
            }
        }

        console.log('\n');
    }
}

//depthFirstSearch function
function depthFirstSearch(v){

    this.marked[v] = true;

    if(this.adjencyRep[v] != undefined){

        console.log("Visited vertex: " + v);
    }

    for(var w in this.adjencyRep[v]){

        if(!this.marked[w]){

            this.depthFirstSearch(w);
        }
    }
}

//test 

var graph = new Graph(5); //5 vertices 

graph.addEdge(0,1); //0,2 edge
graph.addEdge(0,2); //2,1 edge 
graph.addEdge(0,4); //0,4 edge 
graph.addEdge(4,2); //4,2 edge
graph.addEdge(3,1); //3,1 edge

graph.displayGraph();
graph.depthFirstSearch(0);


