// Using For loops

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("I need to ace my interview"));

// Using inbuilt String Functions

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("I Love India"));
