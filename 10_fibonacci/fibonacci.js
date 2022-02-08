const fibonacci = function (number) {
    let fib = Number(number);
    if (number < 0) {
        return "OOPS";
    }
    else {
        if (fib == 0) {
            return 0;
        }
        else if (fib == 1) {
            return 1;
        }
        else { return (fibonacci(fib - 1) + fibonacci(fib - 2)) }
    }
};

// Do not edit below this line
module.exports = fibonacci;
