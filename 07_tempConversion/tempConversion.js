const convertToCelsius = function(tempInFhn) {
  let tempInC = (tempInFhn - 32) * 5/9;
  return Math.round(tempInC * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
  let tempInFhn = tempInC * 9/5 + 32;
  return Math.round(tempInFhn * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
