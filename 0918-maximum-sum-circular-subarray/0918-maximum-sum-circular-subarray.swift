class Solution {
    func maxSubarraySumCircular(_ nums: [Int]) -> Int {
        var maximumValue = nums[0]
        var currentValue = nums[0]
        var minimumValue = nums[0]
        var minimumCurrentValue = nums[0]

        for i in 1..<nums.count {
            currentValue = max(nums[i], currentValue + nums[i])
            maximumValue = max(maximumValue, currentValue)
            minimumCurrentValue = min(nums[i], minimumCurrentValue + nums[i])
            minimumValue = min(minimumValue, minimumCurrentValue)
        }
        let sum = nums.reduce(0, +)
        if (sum == minimumValue) {
            return maximumValue
        }
        return max((sum - minimumValue), maximumValue)
    }
}