class Solution {
    func integerReplacement(_ n: Int) -> Int {
        var dp = Array(repeating: -1, count: 25)
        dp[0] = 10000
        dp[1] = 0
        dp[2] = 1
        dp[3] = 2
        dp[4] = 2
        dp[5] = 3
        dp[6] = 3
        dp[7] = 4
        dp[8] = 3
        dp[9] = 4
        dp[10] = 4
        dp[11] = 5
        dp[12] = 4
        dp[13] = 5
        dp[14] = 5
        dp[15] = 5
        // dp[16] = 4
        // dp[17] = 5
        // dp[18] = 5
        // dp[19] = 6
        // dp[20] = 5
        // dp[21] = 6
        // dp[22] = 6
        // dp[23] = 7
        // dp[24] = 5
        
        func replacement(_ n:Int) -> Int {
            if (n <= 15) {
                return dp[n]
            }
            if n % 2 == 0 {
                return replacement(n / 2) + 1
            } else {
                return min(replacement(n + 1), replacement(n - 1)) + 1
            }
        }
               
        return replacement(n)
    }
}