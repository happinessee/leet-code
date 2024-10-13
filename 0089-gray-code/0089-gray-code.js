/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var binaryList = [];
    for (var i = 0; i < 2**n; i++) {
        binaryList.push(i ^ (i >> 1));
    }
    return binaryList;
};
