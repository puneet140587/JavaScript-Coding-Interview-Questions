function removeWhitespace(str) {
  let strWithoutSpace = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "\t" && str[i] !== "\n") {
      strWithoutSpace += str[i];
    }
  }
  return strWithoutSpace;
}
console.log(removeWhitespace("We    are learning        Javascript"));

// Using Regex Pattern

function removeWhiteSpace(str) {
  const result = str.replace(/\s/g, "");
  return result;
}

console.log(removeWhiteSpace(" Why, we should     learn   javascript"));
