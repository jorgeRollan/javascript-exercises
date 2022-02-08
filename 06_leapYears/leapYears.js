const leapYears = function (...args) {
    if (args.length == 1 && typeof args[0] == 'number') {
        let fecha = args[0];
            if (fecha % 100 == 0) {
                if (fecha % 400 == 0) {
                    return true;
                }
                else return false;
            }
            else {
                if (fecha % 4 == 0) {
                    return true;
                }
                else return false;
            }
        }
    else return "ERROR";
}

// Do not edit below this line
module.exports = leapYears;
