/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let elapsedMinutes = 0;
    let freshOrangesCount = checkFreshOrangesCount(grid, m, n);

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    const visited = Array.from({ length: m }, () => Array(n).fill(0));

    while (true) {
        const rottenCells = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2 && visited[i][j] === 0) {
                    rottenCells.push([i, j]);
                    visited[i][j] = 1;
                }
            }
        }

        if (rottenCells.length === 0 || freshOrangesCount === 0) break;

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


// const m = grid.length;
//     const n = grid[0].length;
//     let totalWalls = 0;
//     const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

//     while (true) {
//         const regions = [];
//         const frontiers = [];
//         const wallsNeeded = [];
//         const visited = Array.from({ length: m }, () => Array(n).fill(0));

//         // 1. 각 감염 영역(region) 찾기
//         for (let i = 0; i < m; i++) {
//             for (let j = 0; j < n; j++) {
//                 if (grid[i][j] === 1 && visited[i][j] === 0) {
//                     const region = [];
//                     const frontier = new Set();
//                     let walls = 0;
//                     const queue = [[i, j]];
//                     visited[i][j] = 1;
//                     while (queue.length) {
//                         const [x, y] = queue.shift();
//                         region.push([x, y]);
//                         for (const [dx, dy] of dirs) {
//                             const nx = x + dx;
//                             const ny = y + dy;
//                             if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
//                             // 감염되지 않은 셀이면 해당 경계를 센다.
//                             if (grid[nx][ny] === 0) {
//                                 walls++;
//                                 frontier.add(nx + "," + ny);
//                             } else if (grid[nx][ny] === 1 && visited[nx][ny] === 0) {
//                                 visited[nx][ny] = 1;
//                                 queue.push([nx, ny]);
//                             }
//                         }
//                     }
//                     regions.push(region);
//                     frontiers.push(frontier);
//                     wallsNeeded.push(walls);
//                 }
//             }
//         }

//         // 만약 감염 영역이 없다면 중단
//         if (regions.length === 0) break;

//         // 2. 최대 위협 영역 선택 (가장 많은 frontier를 가진 영역)
//         let maxIndex = 0;
//         for (let i = 1; i < frontiers.length; i++) {
//             if (frontiers[i].size > frontiers[maxIndex].size) {
//                 maxIndex = i;
//             }
//         }
//         // 만약 선택한 영역이 더 이상 위협받는 셀이 없다면 종료
//         if (frontiers[maxIndex].size === 0) break;

//         // 3. 해당 영역에 벽을 설치하고 격리 처리 (-1로 마킹)
//         totalWalls += wallsNeeded[maxIndex];
//         for (const [x, y] of regions[maxIndex]) {
//             grid[x][y] = -1; // 격리된 영역
//         }

//         // 4. 나머지 영역은 감염 확산 처리
//         for (let i = 0; i < regions.length; i++) {
//             if (i === maxIndex) continue;
//             for (const pos of frontiers[i]) {
//                 const [x, y] = pos.split(",").map(Number);
//                 if (grid[x][y] === 0) {
//                     grid[x][y] = 1;
//                 }
//             }
//         }
//     }
    
//     return totalWalls;