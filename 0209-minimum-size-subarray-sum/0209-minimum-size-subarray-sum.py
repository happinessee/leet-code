class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        start, end = 0, 1
        sub_array_sum = nums[0]
        minSubArrayLength = 100001
        
        while(True):
            if (sub_array_sum < target and end < len(nums)):
                sub_array_sum += nums[end]
                end += 1
            elif (sub_array_sum >= target):
                minSubArrayLength = min(minSubArrayLength, end-start)
                sub_array_sum -= nums[start]
                start += 1
            else:
                break
                
        return 0 if minSubArrayLength == 100001 else minSubArrayLength