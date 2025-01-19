
var MedianFinder = function() {
    this.arr = [];
    this.medianIndex = -1;
    this.isEven = true; 
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.isEven = !this.isEven;
    this.medianIndex = this.isEven === false ? this.medianIndex+1 : this.medianIndex;

    let i = 0;
    while (num > this.arr[i]) i++;
    this.arr.splice(i, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    return this.isEven ? (this.arr[this.medianIndex] + this.arr[this.medianIndex+1]) / 2 : this.arr[this.medianIndex];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */