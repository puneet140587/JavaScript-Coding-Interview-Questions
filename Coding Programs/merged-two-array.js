// Using Concat method & spread operator method

const arr1 = [11, 22, 63, 47, 25];
const arr2 = [68, 77, 82, 98, 101];

//const mergedArray = arr1.concat(arr2);
// or
const mergedArray = [...arr1, ...arr2];

const sortedArray = mergedArray.sort((a, b) => a - b);

//console.log(mergedArray);
console.log(sortedArray);
