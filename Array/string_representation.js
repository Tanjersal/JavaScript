//toString() and join()

var names = ['Fabien', 'Jerome', 'Sally', 'Nadia', 'Fabien'];

var list1 = names.join(); //return comma separated

console.log(list1);

var list2 = names.toString() //dido

console.log(list2);

//splice and concat

//concat - returns a new combined array

var names2 = ['Abdoul', 'Armand', 'Jules'];

var list3 = names.concat(names2);

console.log(list3);//new combined array


//splice - creates a new subset array from the array 

var list4 = list3.splice(2, 6);

console.log(list4);//new subset array from pos 2 to 6
