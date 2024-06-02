class Solution {
    func search(_ nums: [Int], _ target: Int) -> Int {
        var concatedNums = nums + nums
        let arrayLength = nums.count
        var left = 0
        var right = arrayLength * 2 - 1
        var mid = (left + right) / 2
        while left <= right {
            // print(left, right, mid)
            if target == concatedNums[mid] {
                return mid % arrayLength
            }
            else if target > concatedNums[mid] {
                left = mid + 1
                while concatedNums[((left + right) / 2)] < concatedNums[mid] && left <= right {
                    right -= 1
                    // print("in: ", left, right, mid)
                }
            } else {
                right = mid - 1
                while concatedNums[((left + right) / 2)] > concatedNums[mid] && left <= right {
                    left += 1
                    // print("in: ", left, right, mid)
                }
            }
            mid = (left + right) / 2
        }
        return -1
    }
}