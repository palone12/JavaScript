// Pass By Value - it is applicabele for primitive data types 
//Examples

var name1 ='Pranay';
var name2= name1;
console.log(name1==name2)


// Pass by reference - it is for  non primitive data type  liike objects
const arr = [1,2,3,4,5];
const arr2= arr;
console.log(arr===arr2)


// Arrays
//Declaretion of Arr 
//1st t way
let array = [0,1,56,56];
console.log(array)


//Adding element at the end of the of the array
array.push(5666)
console.log(array)

// Remove the element of the array
array.pop();
array.shift();

console.log(array)


// Deleting Element in Array 
delete array[2];
console.log(array)

array.push(10);
array.push(11);
array.push(13);
array.push(14);
// Slice and Splice
console.log(array)
array .splice(2,3)
console.log(array)
console.log(array.splice(-1));