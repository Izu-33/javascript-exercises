const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  let total = 0;

  if(arr.length === 0) {
    return total;
  }

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function(x, y) {
  return Math.pow(x, y);
};

const factorial = function(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
