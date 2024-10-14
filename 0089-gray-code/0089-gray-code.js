/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var binaryList = [];
    for (var i = 0; i < (1 << n); i++) {
        binaryList.push(i ^ (i >> 1)); // i xor (i >> 1)
    }
    return binaryList;
};
