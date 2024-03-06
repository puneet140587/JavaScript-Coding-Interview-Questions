// Find duplicates Element

//Filter approach method (Not Effecient)

// const arr = [2, 8, 5, 5, 3, 9, 2, 4, 3];
// const duplicates = arr.filter((num, index, arr) => arr.indexOf(num) !== index);

// console.log(duplicates);

// Set Approach Method (Efficient)

// const array = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8];
// const uniqueElements = new Set();
// const duplicates = [];

// for (let element of array) {
//   if (uniqueElements.has(element)) {
//     duplicates.push(element);
//   } else {
//     uniqueElements.add(element);
//   }
// }
// console.log(duplicates);

// ******************************************************************************************
// Find and return the first duplicate element in an array.

function findFirstDuplicate(arr) {
  const seenElements = new Set();

  for (const element of arr) {
    if (seenElements.has(element)) {
      return element;
    }
    seenElements.add(element);
  }
  return null;
}

const duplicateArray = [1, 2, 2, 3, , 5, 5, 6];
const firstDuplicate = findFirstDuplicate(duplicateArray);

console.log(firstDuplicate);
