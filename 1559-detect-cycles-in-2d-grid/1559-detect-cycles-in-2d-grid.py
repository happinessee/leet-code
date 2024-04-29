class Solution:
    def containsCycle(self, grids: List[List[str]]) -> bool:
        m = len(grids)
        n = len(grids[0])
        if (m == 1 or n == 1): return False
    
        # letters = set()
        # for grid in grids:
        #     letters.update(grid)
    
        move = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        visited = [[False for i in range(n)] for i in range(m)]
    
        # def containsLetter(letter: str):
        #     for i in range(m):
        #         for j in range(n):
        #             if (grids[i][j] == letter and visited[i][j] == False): return (i, j)
        #     return (501, 501)
        
        def dfs(x:int, y:int, px: int, py: int, value: str, length: int):
            visited[y][x] = True
            for dy, dx in move:
                nextY, nextX = y + dy, x + dx
                if 0 > nextX or nextX >= n or 0 > nextY or nextY >= m or (nextY, nextX) == (py, px): continue
                # if (grids[nextY][nextX] == value and visited[nextY][nextX] == True and length >= 3): return True
                if grids[nextY][nextX] == value:
                    if visited[nextY][nextX] or dfs(nextX, nextY, x, y, value, length+1):
                        return True
            return False
        
        for y in range(m):
            for x in range(n):
                if not visited[y][x] and dfs(x, y, -1, -1, grids[y][x], 1):
                    return True
        return False
        
        