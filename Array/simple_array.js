//create an array from sentence

var sentence = "Etalons ya decouragement!";

var words = sentence.split(" ");

for (var i =0; i<words.length; i++)
{
    console.log('Word: '+ i + " " + words[i]);
}

//aggregate functions shallow copy of 

var nums = [];
nums[0] = 400;
var anothernums = nums;

//both point to the same reference
console.log(nums[0]);
console.log(anothernums[0]);

//deep copy 

function copy(arr1, arr2)
{
    for(var i=0; i<arr1.length; i++)
    {
        arr2[i] = arr1[i];
    }
}

var nums = [];

for(var i=0; i<100; i++)
{
    nums[i] = i + 1;
}

var anotherOne = [];

copy(nums, anotherOne);

nums[0] = 2500;
console.log(nums[0]); //2500
console.log(anotherOne[0]);//1