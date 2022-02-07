const repeatString = function (string, value) {
    let repeatedString = "";
    if (value >= 0) {
        for (let a = 0; a < value; a++) {
            repeatedString = repeatedString.concat(string);
        }
        return repeatedString;
    }
    else return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
