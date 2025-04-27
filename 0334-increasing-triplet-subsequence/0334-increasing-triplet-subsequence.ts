function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;
    if ((new Set(nums)).size < 3) return false;

    let first = Infinity;
    let second = Infinity;

    for (const num of nums) {
        if (num <= first) first = num;
        else if (num <= second) second = num;
        else return true;
    }

    return false;
};