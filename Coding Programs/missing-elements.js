const arrNum = [1, 2, 3, 4, 5, 6, 9, 10];
const arrNum2 = [5, 2, 8, 1, 4];

const missingArray = [];

const missingValues = (arr) => {
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);

  for (let i = minNum; i < maxNum; i++) {
    if (arr.indexOf(i) < 0) {
      missingArray.push(i);
    }
  }
  return missingArray;
};

console.log(missingValues(arrNum2));
