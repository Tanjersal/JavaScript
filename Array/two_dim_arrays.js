//javascript supports one dim array - but two dim array can be created in two ways

Array.matrix = function(numrows, numcols, initial) 
{ 
    var arr = []; 
    for(var i=0;i<numrows;++i)
    {
        var columns = []; 
        for(var j=0;j<numcols;++j)
        {
             columns[j] = initial;
        }
          arr[i] = columns;
    }
return arr; 
}

var two_dim = Array.matrix(5,5,0);
console.log(two_dim[2][2]); //create two dim array of 5 cols 5 rows with 0s


//or we can create two dim array as follow

var another_two_dim = [[1,2,3],
                       [4,5,6],
                       [7,8,9]];

console.log("Two dim: " + another_two_dim[2][0]); //7
console.log("Two dim: " + another_two_dim[2][1]); //8
console.log("Two dim: " + another_two_dim[1][2]); //6

//processing array by columns
var numbers = [[100, 50, 78],
               [10, 3, 43],
               [20, 11, 2]]; 

var total = 0;
var avg = 0.0;

for (var col = 0; col < numbers.length; ++col) 
{
    for (var row = 0; row < numbers[col].length; ++row) 
    { 
        total += numbers[row][col];
    }

    avg = total / numbers[col].length;
    console.log("Average " + parseInt(col+1)+ ": " + avg.toFixed(2));
}

//array of object 

function Names(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
}

function displayNames(arr){

    for(var i=0; i<arr.length; i++){

        console.log("Firstname: " + arr[i].firstName, "LastName: " + arr[i].lastName);
    }
}

var name1 = new Names();
name1.firstName = 'Fabien';
name1.lastName = 'Deschamps';

var name2 = new Names();
name2.firstName = 'Bookie';
name2.lastName = 'Faychou';


//array 

var listNames = [name1, name2];

displayNames(listNames);

console.log("\n");

//add objects to the array 

var name3 = new Names();
name3.firstName = 'Leslie';
name3.lastName = 'Mandela';

listNames.push(name3);

displayNames(listNames);

console.log("\n");
//another example

function studentGrades(){

    this.grades = [];
    this.insertGrades = function(grade){

        this.grades.push(grade);
    };

    this.average = function(){

        var total =0;

        for(var i =0; i< this.grades.length; i++){

            total = total + this.grades[i];
        }

        var avg = total / this.grades.length;

        return avg;
    };
}

var mark = new studentGrades();

mark.insertGrades(90);
mark.insertGrades(87);
mark.insertGrades(96);

console.log(mark.grades);
var result = mark.average();
console.log("student average: " + result);



