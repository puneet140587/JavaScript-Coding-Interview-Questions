// Using  for Loop

function palindromeCheck(str) {
  let checkStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    checkStr += str[i];
  }
  if (checkStr === str) {
    console.log("String is Palindrome");
  } else {
    console.log("not a Palindrome");
  }
}
console.log(palindromeCheck("racecar"));

// Using inbuilt function

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racecar"));
