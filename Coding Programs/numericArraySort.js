const numericArray = [5, 2, 8, 1, 4];

//By default, the sort() method sorts the elements as strings,
//it converts the elements into strings and then compares their sequences of UTF-16 code units.
//so for numeric sorting, you need to provide a comparison function.

// numericArray.sort(function (a, b) {
//   return a - b; // Sorting in ascending order
// });

// Arrow function approach
numericArray.sort((a, b) => b - a); // ascending order

console.log(numericArray); // Output: [1, 2, 4, 5, 8]
