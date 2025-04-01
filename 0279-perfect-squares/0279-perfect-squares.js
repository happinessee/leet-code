function numSquares(n) {
  // n 이하의 제곱수 목록 생성
  const squares = [];
  for (let i = 1; i * i <= n; i++) {
    squares.push(i * i);
  }

  // BFS 큐 초기화: 시작 값은 n
  const queue = [n];
  const visited = new Set([n]); // 이미 방문한 상태 저장
  let level = 0;

  while (queue.length > 0) {
    level++;
    const nextQueue = [];
    for (const remainder of queue) {
      for (const square of squares) {
        const next = remainder - square;
        if (next < 0) break; // 더 이상 큰 제곱수는 필요 없음
        if (next === 0) return level; // 정확히 맞추면 level 반환
        if (!visited.has(next)) {
          visited.add(next);
          nextQueue.push(next);
        }
      }
    }
    // 다음 레벨의 노드로 교체
    queue.splice(0, queue.length, ...nextQueue);
  }
  return level;
}
