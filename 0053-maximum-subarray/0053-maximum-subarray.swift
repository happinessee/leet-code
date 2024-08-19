class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        // nums 배열의 첫 번째 요소로 초기값을 설정
        var maximumValue = nums[0]
        var currentValue = nums[0]

        // 두 번째 요소부터 배열을 순회하며 최대 부분 배열의 합을 계산
        for i in 1..<nums.count {
            // 현재 값은 이전 부분 배열의 합과 현재 요소 중 큰 값을 선택
            currentValue = max(nums[i], currentValue + nums[i])
            // 최대 값은 현재 값과 이전 최대 값 중 큰 값을 선택
            maximumValue = max(maximumValue, currentValue)
        }
        return maximumValue
    }
}