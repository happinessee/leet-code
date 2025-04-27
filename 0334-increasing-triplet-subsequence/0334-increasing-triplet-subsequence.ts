function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;
    if ((new Set(nums)).size < 3) return false;

    let i = 0;
    let j = 1;
    let k = 2;

    const length = nums.length;

    while(i < length - 2) {
        if (nums[i] < nums[j] && nums[j] < nums[k]) return true;

        if (k === length - 1 && j === length - 2) {
            i++;
            j = i + 1;
            k = i + 2;
            continue;
        }

        if (k === length - 1 && j !== length - 2) {
            j++;
            k = j + 1;
            continue;
        } 

        if (nums[i] >= nums[j]) {
            i++;
            j = i + 1;
            k = i + 2;
            continue;
        }

        if (nums[j] >= nums[k]) {
            k++;
            continue;
        }
    }

    return false;
};