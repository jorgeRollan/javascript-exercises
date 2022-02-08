const sumAll = function (number1, number2) {
    let n1 = number1;
    let n2 = number2;

    if (number1 > 0 && number2 > 0 && typeof number2 == 'number') {
        if (number1 > number2) {
            n1 = number2;
            n2 = number1;
        }
        if (n2 > n1) {
            return n2 + sumAll(n1, n2 - 1);
        }
        else { return n1; }
    }
    else return "ERROR";

};

// Do not edit below this line
module.exports = sumAll;