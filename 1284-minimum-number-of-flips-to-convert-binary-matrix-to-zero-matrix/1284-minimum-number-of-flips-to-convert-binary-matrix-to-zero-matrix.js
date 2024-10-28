/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  if (checkZeroMatrix(mat, m, n)) {
    return 0;
  }

  return bfs(mat, m, n);
};

var checkZeroMatrix = function (mat, m, n) {
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        return false;
      }
    }
  }
  return true;
};

var bitFlip = function (mat, m, n, currentRowIdx, currentColumnIdx) {
  const dirs = [
    [0, 0],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // 매트릭스 복사본 생성
  const newMat = mat.map(row => row.slice());

  for (const [dx, dy] of dirs) {
    const x = currentRowIdx + dx;
    const y = currentColumnIdx + dy;
    if (x >= 0 && x < m && y >= 0 && y < n) {
      newMat[x][y] = newMat[x][y] === 1 ? 0 : 1;
    }
  }
  return newMat;
};

var bfs = function (mat, m, n) {
  // 방문한 상태를 저장하기 위한 Set 사용
  var visited = new Set();

  const queue = [];
  queue.push([mat, 0]);

  while (queue.length > 0) {
    const [state, steps] = queue.shift();

    // 현재 상태를 문자열로 변환
    const stateStr = matrixToString(state);

    // 이미 방문한 상태이면 스킵
    if (visited.has(stateStr)) {
      continue;
    }

    // 현재 상태를 방문 처리
    visited.add(stateStr);

    if (checkZeroMatrix(state, m, n)) return steps;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let nextState = bitFlip(state, m, n, i, j);
        queue.push([nextState, steps + 1]);
      }
    }
  }
  return -1;
};

// 매트릭스를 문자열로 변환하는 함수
var matrixToString = function (mat) {
  return mat.flat().join('');
};
