class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]  # memoization table

        def dfs(x, y):
            # Return the cached result if already computed
            if dp[x][y]:
                return dp[x][y]
            # Initialize length as 1 (the cell itself)
            length = 1
            # Possible moves: up, down, left, right
            directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
            for dx, dy in directions:
                nx, ny = x + dx, y + dy
                if 0 <= nx < m and 0 <= ny < n and matrix[nx][ny] > matrix[x][y]:
                    length = max(length, 1 + dfs(nx, ny))
            dp[x][y] = length
            return length

        # Compute paths starting from every cell
        result = 0
        for i in range(m):
            for j in range(n):
                if dp[i][j] == 0:  # If not computed yet
                    result = max(result, dfs(i, j))
        return result
        