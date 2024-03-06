// Reverse the order of elements in an array without using the built-in reverse method.
// function reverseArray(arr) {
//   return arr.reduceRight((acc, currentValue) => {
//     acc.push(currentValue);
//     return acc;
//   }, []);
// }
// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray);

//another method for reversing Array

function reverse(arr) {
  const reversedArray = [];
  while (arr.length > 0) {
    reversedArray.push(arr.pop());
  }
  return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];

console.log(reverse(originalArray));
