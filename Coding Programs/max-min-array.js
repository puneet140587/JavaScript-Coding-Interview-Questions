// Spread operator approach

// const numbers = [5, 2, 8, 7, 1, 4];

// const maxNum = Math.max(...numbers);
// console.log(maxNum);

// const minNum = Math.min(...numbers);
// console.log(minNum);

// For Loop Approach

// const numbers = [5, 2, 7, 8, 1, 4];

// let maxNumber = numbers[0];
// let minNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//     maxNumber = numbers[i];
//   }

//   if (numbers[i] < minNumber) {
//     minNumber = numbers[i];
//   }
// }

// console.log(maxNumber);
// console.log(minNumber);

// Reduce method Approach

const arrNumber = [5, 2, 7, 8, 1, 4];

const maxFunction = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre > cur ? pre : cur;
  });
};

console.log(maxFunction(arrNumber));
