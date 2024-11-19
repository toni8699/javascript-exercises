const reverseString = function(string) {
    let result = '';
    n = string.length;
    for (let i = 0; i < n; i++) {
        result +=string[n-1-i];}
        return result;

};

// Do not edit below this line
module.exports = reverseString;
