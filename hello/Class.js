// Pass By Value - it is applicabele for primitive data types 
//Examples

var name1 ='Pranay';
var name2= name1;
console.log(name1==name2)


// Pass by reference - it is for  non primitive data type  liike objects
const arr = [1,2,3,4,5];
const arr2= arr;
console.log(arr===arr2)