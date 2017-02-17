//adjency list graph implementation

function Graph(v){

    this.vertices = v; //vertex
    this.edges = 0; //edge 
    this.adjencyRep = []; //array
    this.addEdge = addEdge;
    this.toString = toString;
    this.displayGraph = displayGraph;

    for (var i=0; i< this.vertices; i++){
        this.adjencyRep[i] = []; //creates the adjency subarray 
        this.adjencyRep[i].push(""); //initialises each array to null
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

//test 

var graph = new Graph(5); //5 vertices 

graph.addEdge(0,2); //0,2 edge
graph.addEdge(2,1); //2,1 edge 
graph.addEdge(0,4); //0,4 edge 
graph.addEdge(4,2); //4,2 edge 

graph.displayGraph();


