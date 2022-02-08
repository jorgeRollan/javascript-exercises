const palindromes = function (palindrome) {
    palindrome = (palindrome.replace(/[^a-zA-Z ]/g, "")).split(" ").join("").split("");
    let palindromeReverse = palindrome.reverse().slice("");
    palindrome.reverse();
    let a = 0;
    let equal = true;
    while (a < palindrome.length && equal == true) {
        if (palindrome[a].toLowerCase() != palindromeReverse[a].toLowerCase()) {
            equal = false;
        }
        a=a + 1;
    }
    return equal;
};

// Do not edit below this line
module.exports = palindromes;
