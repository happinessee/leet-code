/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    const output = new ArraySet();

    for (let i = 0; i < nums.length - 2; i++) {
        const firstElement = nums[i];
        
        let j = i + 1;
        let k = nums.length - 1;
        // two pointer
        while (j !== k) {
            const secondElement = nums[j];
            const thirdElement = nums[k];
            
            const sum = firstElement + secondElement + thirdElement;
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                output.add([firstElement, secondElement, thirdElement]);
                j++;
            }
        }
    }
    return output.values();
};

class ArraySet {
  constructor() {
    this.map = new Map();
  }

  add(value) {
    const key = JSON.stringify(value);
    if (!this.map.has(key)) {
      this.map.set(key, value);
    }
  }

  has(value) {
    return this.map.has(JSON.stringify(value));
  }

  values() {
    return Array.from(this.map.values());
  }
}
