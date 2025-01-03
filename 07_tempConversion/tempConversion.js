const convertToCelsius = function(x) {
  let num = (x - 32) * (5/9);
  return Math.round(num * 10) / 10;
};

const convertToFahrenheit = function(x) {
  let num = (x * (9/5) + 32);
  return Math.round(num * 10) / 10;
};


console.log(convertToCelsius(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
