// Using for Loop

function removeDuplicate(arr) {
  const uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueNumbers.indexOf(arr[i]) === -1) {
      uniqueNumbers.push(arr[i]);
    }
  }
  return uniqueNumbers;
}
console.log(removeDuplicate([1, 2, 3, 4, 4, 5, 6, 6, 7]));

// Using Set method approach

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7]));
