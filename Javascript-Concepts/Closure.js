// Get output 0,1,2 without using let.

//Problem statement
// for(let i=0; i<=2; i++){
//     setTimeout(function(){console.log(i)}, 1000);
// }

//Solution  but needs to undertand IIFE
for (var i = 0; i <= 2; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index);
    }, 1000);
  })(i);
}

// Closure example 1 to understand

// function abc(a) {
//   return function xyz(b) {
//     console.log(a * b);
//   };
// }

// var result = abc(2);
// console.log(result(6));

// Closure example 2 to understand

// const outer = () => {
//   let a = 1;

//   const inner = () => {
//     console.log(a);
//     a++;
//   };
//   return inner;
// };

// const ret = outer();
// ret();
// ret();
