class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]

        def dfs(x, y):
            if dp[x][y]:
                return dp[x][y]

            length = 1
            directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                if 0 <= nx < m and 0 <= ny < n and matrix[nx][ny] > matrix[x][y]:
                    length = max(length, 1 + dfs(nx, ny))
            dp[x][y] = length
            return length

        result = 0
        for i in range(m):
            for j in range(n):
                if dp[i][j] == 0:
                    result = max(result, dfs(i, j))
        return result
        