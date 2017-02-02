//indexOf accessor functions - 

//import module readline
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

var names = ['Fabien', 'Jerome', 'Sally', 'Nadia'];

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
