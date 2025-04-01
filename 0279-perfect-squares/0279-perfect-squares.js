function numSquares(n) {
  const squares = [];
  for (let i = 1; i * i <= n; i++) {
    squares.push(i * i);
  }

  const queue = [n];
  const visited = new Set([n]);
  let level = 0;

  while (queue.length > 0) {
    level++;
    const nextQueue = [];
    for (const remainder of queue) {
      for (const square of squares) {
        const next = remainder - square;
        if (next < 0) break;
        if (next === 0) return level;
        if (!visited.has(next)) {
          visited.add(next);
          nextQueue.push(next);
        }
      }
    }
    
    queue.splice(0, queue.length, ...nextQueue);
  }
  return level;
}
