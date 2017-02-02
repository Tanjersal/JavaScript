//indexOf accessor functions - 

//import module readline
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

var names = ['Fabien', 'Jerome', 'Sally', 'Nadia', 'Fabien'];

rl.question("Enter a name to search for: ", function(name){

    //find the position
    var position = names.indexOf(name);

    if(position>=0)
    {
        console.log('Name ' + name + ' is found at position ' + position);
    }
    else
    {
        console.log('Could not find the name');
    }

    //close the stream

    rl.close();
})

//using lastindexOf for the last occurence

var test1 = 'Fabien';

var retrieved_pos = names.lastIndexOf(test1);

console.log('Last occurence of ' + test1 + 'is at ' + retrieved_pos);