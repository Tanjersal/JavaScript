//quickSort implementation

function QuickSort(arr){

    //if array is empty - return
    if(arr.length==0){
        return [];
    }

    //define pivot, left and right portion of array
    var left = [];
    var right = [];
    var pivot = arr[0]; //first element 

    for(var i=1; i<arr.length; i++){

        if(arr[i] < pivot){

            left.push(arr[i]); //store lesser values
        }
        else{

            right.push(arr[i]); //store greater values
        }
    }
    return QuickSort(left).concat(pivot, QuickSort(right));; //recursively sort left and right arrays and concat
}


var testArr = [];
for(var i=0; i< 10; i++){

    testArr[i] = Math.floor((Math.random() * 99) + 1);
}

console.log(testArr);

console.log(QuickSort(testArr));

