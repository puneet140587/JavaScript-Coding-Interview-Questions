function isArmstrongNumber(number) {
  const numStr = String(number);
  const numDigits = numStr.length;

  const sum = numStr.split("").reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), numDigits);
  }, 0);
  return sum === number;
}
console.log(isArmstrongNumber(372));

// function isArmstrongNumber(num) {
//   len = num.toString().length;
//   totalLength = parseInt(len)
//   sum = 0;
//   for (let i = 0; i < totalLength; i++) {
//     sum += num[i] ** totalLength;
//   }
//   return sum === parseFloat(num);
// }
// console.log(isArmstrongNumber('9474'));
