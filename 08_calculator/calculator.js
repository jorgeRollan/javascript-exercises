const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2
};

const sum = function (numbers) {
  let sum = 0;
  numbers.forEach(element => {
    sum = sum + element;
  });
  return sum;
};

const multiply = function (numbers) {
  let mul=1
  numbers.forEach(element => {
    mul = mul * element;
  });
  return mul;
};

const power = function (number1, number2) {
  if (number2 == 0) {
    return 1;
  }
  else {
    if (number2 > 0) {
      return number1 * power(number1, number2 - 1);
    }
    else { return number1 * power(number1, number2 + 1); }
  }
};

const factorial = function (number) {
  if (number == 0) {
    return 1;
  }
  else if (number == 1) {
    return 1;
  }
  else if(number==2){
    return 2;
  }
  else {
    return number * factorial(number-1);
  }
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
