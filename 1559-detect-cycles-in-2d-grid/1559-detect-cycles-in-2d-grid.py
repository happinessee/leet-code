class Solution:
    def containsCycle(self, grids: List[List[str]]) -> bool:
        m = len(grids)
        n = len(grids[0])
        if (m == 1 or n == 1): return False
    
        move = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        visited = [[False for i in range(n)] for i in range(m)]
        
        def dfs(x:int, y:int, px: int, py: int, value: str):
            visited[y][x] = True
            for dy, dx in move:
                nextY, nextX = y + dy, x + dx
                if 0 > nextX or nextX >= n or 0 > nextY or nextY >= m or (nextY, nextX) == (py, px): continue
                if grids[nextY][nextX] == value:
                    if visited[nextY][nextX] or dfs(nextX, nextY, x, y, value):
                        return True
            return False
        
        for y in range(m):
            for x in range(n):
                if not visited[y][x] and dfs(x, y, -1, -1, grids[y][x]):
                    return True
        return False
        