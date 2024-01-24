const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let result = 0;
	if(arr){
    for(let num of arr){
      result += num;
    }
    return result;
  }else{
    return result;
  }
};

const multiply = function(arr) {
  result = 1;
  if(arr){
    for(let num of arr){
      result *= num;
    }
    return result;
  }
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
	let result = 1;
  for(let i=1; i<=num; i++){
    result *= i;
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
