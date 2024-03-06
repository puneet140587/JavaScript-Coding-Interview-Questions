// Even odd using for Loop
// const numbers = [1, 5, 8, 6, 2, 4, 7];
// const evenNumbers = [];
// const oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
//   if (numbers[i] % 2 !== 0) {
//     oddNumbers.push(numbers[i]);
//   }
// }
// console.log(evenNumbers);
// console.log(oddNumbers);

// Using For each Loop effecient method

// const numbers = [1, 5, 8, 6, 2, 4, 7];
// const evenNumbers = [];
// const oddNumbers = [];

// numbers.forEach((number) => {
//   if (number % 2 == 0) {
//     evenNumbers.push(number);
//   } else {
//     oddNumbers.push(number);
//   }
// });

// console.log(evenNumbers);
// console.log(oddNumbers);

// Even odd using filter method

// const numbers = [1, 5, 8, 6, 2, 4, 7];
// const even = numbers.filter((item) => {
//     return item%2===0
// })
// console.log(even);
// const odd = numbers.filter((item) => {
//     return item%2!==0
// })
// console.log(odd);

// Using reduce method

// const numbers = [1, 5, 8, 6, 2, 4, 7];
// const oddNumbers = numbers.reduce((result, number) => {
//   if (number % 2 !== 0) {
//     result.push(number);
//   }
//   return result;
// }, []);
// console.log(oddNumbers);

const numbers = [1, 5, 8, 6, 2, 4, 7];

const evenNumbers = numbers.reduce((result, number) => {
  if (number % 2 === 0) {
    result.push(number);
  }
  return result;
}, []);
console.log(evenNumbers);
