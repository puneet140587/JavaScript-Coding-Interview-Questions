// // Non-curried function
// function add(a, b, c) {
//   return a + b + c;
// }

// // Curried function
// function curryAdd(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// const curriedAdd = curryAdd(1)(2)(3); // 6
// console.log(curriedAdd);


// Currying real life example scenerio

// Curried pricing function
function calculatePrice(basePrice) {
  return function (loyaltyDiscount) {
    return function (membershipDiscount) {
      return function (promotionalDiscount) {
        // Applying discounts
        const discountedPrice = basePrice * (1 - loyaltyDiscount) * (1 - membershipDiscount) * (1 - promotionalDiscount);
        return discountedPrice;
      };
    };
  };
}

// Example usage
const finalPrice = calculatePrice(100)(0.1)(0.05)(0.2);
console.log("Final Price:", finalPrice); // Output: Final Price: 72
