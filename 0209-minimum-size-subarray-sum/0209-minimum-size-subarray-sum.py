class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        nums_length = len(nums)        
        prefix_sum_array = [0 for i in range(nums_length)]
        prefix_sum_array[0] = nums[0]
        for i in range(1, nums_length):
            prefix_sum_array[i] = (prefix_sum_array[i-1] + nums[i])
        print(prefix_sum_array)
        
        def subarray_sum(length: int):
            if (prefix_sum_array[length-1] >= target): return True
            for i in range(nums_length - (length)):
                if (prefix_sum_array[i+length] - prefix_sum_array[i] >= target):
                    return True
            return False
            
        def binary_search():
            st, end = 1, len(nums)
            result = 0
            
            while(st <= end):
                mid = (st + end) // 2
                print(st, end, mid)
                if (subarray_sum(mid)):
                    end = mid - 1
                    result = mid
                else :
                    st = mid + 1
            return result
        output = binary_search()
        return output
        