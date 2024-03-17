class Solution:
    def predictTheWinner(self, nums: List[int]) -> bool:
        n = len(nums)
        
        # Compute the cumulative sums array
        cumSum = [0] * n
        for i in range(n):
            if i == 0:
                cumSum[i] = nums[i]
            else:
                cumSum[i] = cumSum[i - 1] + nums[i]
        
        # Define 2D DP table
        dp = [[0 for _ in range(n)] for _ in range(n)]
        
        # Process for lengths of sub-array from 1 to n
        for i in range(n):
            for j in range(n - i):
                start = j
                end = i + j
                
                # Base Case 1
                if start == end:
                    dp[start][end] = nums[start]
                # Base Case 2
                elif start + 1 == end:
                    dp[start][end] = max(nums[start], nums[end])
                # Recursive Relationship
                else:
                    choice_1 = nums[start] + (cumSum[end] - cumSum[start + 1] + nums[start + 1] - dp[start + 1][end])
                    choice_2 = nums[end] + (cumSum[end - 1] - cumSum[start] + nums[start] - dp[start][end - 1])
                    dp[start][end] = max(choice_1, choice_2)
        
        # Return true if the score of the first player is greater or equal than the second player's
        return dp[0][n - 1] >= (cumSum[n - 1] - dp[0][n - 1])

        