/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let totalSum = nums.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    
    
    if ((target + totalSum) % 2 != 0 || Math.abs(target) > totalSum) {
        return 0;
    } 

    let subsetSum = (target + totalSum) / 2;
    var dp = new Array(subsetSum + 1).fill(0);
    dp[0] = 1;

    for (const num of nums) {
        for (let i = subsetSum; i > num - 1; i--) {
            dp[i] += dp[i - num];
        }
    }

    return dp[subsetSum];
};

        // total_sum = sum(nums)
        // # 불가능한 경우 처리
        // if (target + total_sum) % 2 != 0 or abs(target) > total_sum:
        //     return 0
        // subset_sum = (target + total_sum) // 2
        // dp = [0] * (subset_sum + 1)
        // dp[0] = 1  # 합이 0이 되는 경우의 수

        // for num in nums:
        //     # num이 0이면 dp[i] += dp[i - 0]이므로 dp[i]가 두 배가 됩니다.
        //     # 이를 처리하기 위해 역순으로 반복합니다.
        //     for i in range(subset_sum, num - 1, -1):
        //         dp[i] += dp[i - num]
        // return dp[subset_sum]