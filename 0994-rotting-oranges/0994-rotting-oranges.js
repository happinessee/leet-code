/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let elapsedMinutes = 0;
    let freshOrangesCount = checkFreshOrangesCount(grid, m, n);

    if (freshOrangesCount === 0) return 0;

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    const visited = Array.from({ length: m }, () => Array(n).fill(0));

    while (true) {
        const rottenCells = [];

        // 썩은 오렌지 칸 발견
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2 && visited[i][j] === 0) {
                    rottenCells.push([i, j]);
                    visited[i][j] = 1;
                }
            }
        }

        // 썩은 오렌지가 없거나, 신선한 오렌지가 없다면 while문 탈출
        if (rottenCells.length === 0 || freshOrangesCount === 0) break;

        // 썩은 오렌지 주변 칸 확산
        for (let i = 0; i < rottenCells.length; i++) {
            const x = rottenCells[i][0];
            const y = rottenCells[i][1];

            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                if (grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    freshOrangesCount--;
                }
            }
        }

        elapsedMinutes++;
    }

    if (freshOrangesCount > 0) return -1;
    return elapsedMinutes;
};

const checkFreshOrangesCount = (grid, m, n) => {
    let freshOranges = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }
    return freshOranges;
}
