function checkLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(checkLargest([2, 15, 6, 9, 3]));

// Using reduce method to find the largest value

const largestValue = numbers.reduce(
  (max, current) => (current > max ? current : max),
  numbers[0]
);
console.log("Original Array:", numbers);
console.log("Largest Value:", largestValue);
