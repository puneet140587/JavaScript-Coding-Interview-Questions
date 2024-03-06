// Asynchronus operation example of using Callback

// function fetchData(callback) {
//   setTimeout(function () {
//     const data = "This is from fetched Data function";
//     callback(data);
//   }, 1000);
// }

// function handleData(data) {
//   console.log("Receieved Data", data);
// }

// fetchData(handleData);

// Synchronus  Operation example of using Callback

function square(number, callback) {
  const result = number * number;
  callback(result);
}

function handleResult(result) {
  console.log("square of tne number is  :", result);
}

square(4, handleResult);
