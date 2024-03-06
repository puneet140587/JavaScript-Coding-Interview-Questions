// Using CharAt and Upparcase Method

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// // Example usage:
// const originalString = "hello world";
// const capitalizedString = capitalizeFirstLetter(originalString);
// console.log("Original String:", originalString);
// console.log("Capitalized String:", capitalizedString);

// **************************************************************************

// function capitalizeFirstLetter(str) {
//   const [firstChar, ...rest] = str;
//   return firstChar.toUpperCase() + rest.join("");
// }

// Example usage:
// const originalString = "hello world";
// const capitalizedString = capitalizeFirstLetter(originalString);
// console.log("Original String:", originalString);
// console.log("Capitalized String:", capitalizedString);
