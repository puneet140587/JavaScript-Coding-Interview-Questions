function countOccurrences(str, char) {
  // Initialize a counter for occurrences
  let count = 0;

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is equal to the specified character
    if (str[i] === char) {
      count++;
    }
  }

  // Return the final count of occurrences
  return count;
}

// Example usage:
const exampleString = "hello world";
const charToCount = "l";

const occurrences = countOccurrences(exampleString, charToCount);
console.log(
  `Number of occurrences of "${charToCount}" in "${exampleString}": ${occurrences}`
);

// find to second to last element from the array

let arr = ["a", "b", "c", "d", "e", "f"];
// using array negative index
console.log(arr[arr.length - 2]); //o/p  will be "e"
