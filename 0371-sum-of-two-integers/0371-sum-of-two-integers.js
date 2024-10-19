/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    return bitwiseAdd(a, b);
};

var bitwiseAdd = function(a, b) {
    while (b != 0) {
        var sum = a ^ b;
        var carry = (a & b) << 1;

        a = sum;
        b = carry;
        // console.log("a: ", a);
        // console.log("b: ", b);
    }
    return a;
};
