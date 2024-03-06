// Using sort Method but ineffecient method

// const numbers = [5, 2, 8, 1, 4, 9];

// const sortedArray = numbers.sort((a, b) => b - a);

// const secondlargest = sortedArray[1];

//console.log(secondlargest);

// Using filter Method approach effecient one

// const numbers = [5, 2, 8, 1, 4, 9];

// const maxNumber = Math.max(...numbers);

// const withoutMax = numbers.filter((num) => num != maxNumber);

// const secondlargest = Math.max(...withoutMax);

// console.log(secondlargest);

// Using splice method approach effecient one

// const numbers = [5, 2, 8, 1, 4, 9];
// const maxNumber = Math.max(...numbers);
// const indexOfMax = numbers.indexOf(maxNumber);
// numbers.splice(indexOfMax, 1);
// const secondlargest = Math.max(...numbers);
// console.log(secondlargest);

// Previous Logic using Arrow Function

const intArr = [5, 2, 8, 1, 4, 9];
const largestValue = (arr) => {
  firstlargest = Math.max(...arr);
  index = arr.indexOf(firstlargest);
  arr.splice(index, 1);
  secondlargest = Math.max(...arr);
  return secondlargest;
};
console.log(largestValue(intArr));
