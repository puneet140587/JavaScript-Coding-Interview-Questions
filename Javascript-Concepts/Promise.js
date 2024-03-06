const promiseOne = new Promise(function (resolve, reject) {
  // Do all async task over here
  // DB call, cryptography call, Network calls
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise is consumed");
});

// ***************************************************

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 consumed");
});

// ***************************************************

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Puneet", email: "puneet.shrivastava@ymail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// ***************************************************

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Puneet", email: "angeloftidess007@gmail.com" });
    } else {
      reject("Error something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Promise is either resolved or rejected"));
