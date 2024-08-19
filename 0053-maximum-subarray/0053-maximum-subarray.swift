class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        var maximumValue = nums[0]
        var currentValue = nums[0]

        for i in 1..<nums.count {
            currentValue = max(nums[i], currentValue + nums[i])
            maximumValue = max(maximumValue, currentValue)
        }
        return maximumValue
    }
}