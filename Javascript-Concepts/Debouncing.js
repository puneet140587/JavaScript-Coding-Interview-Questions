let counter = 0;

const getData = () => {
  console.log("Fetching Data ....", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, d);
  };
};

const betterFunc = debounce(getData(), 300); 


