let sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 3));

// higher order function
function higherOrder(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greet = function () {
  console.log("hi my name is waqas ahmad shah");
};

higherOrder(greet, 3);

function oddEven(request) {
  if (request == "odd") {
    return function (n) {
      console.log("odd number is:", !(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log("even number is:", n % 2 == 0);
    };
  }
  else {    console.log("invalid request");
  }
}

oddEven("odd")(5);
