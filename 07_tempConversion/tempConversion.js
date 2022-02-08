const ftoc = function (number) {

  let resultado = ((number - 32) * 5 / 9).toFixed(1);
  return Number(resultado);
};

const ctof = function (number) {
  let resultado = ((number * 9 / 5) + 32).toFixed(1);
  return Number(resultado);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
