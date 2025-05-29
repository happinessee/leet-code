function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) return 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const heights: number[] = Array(n).fill(0);
  let maxArea = 0;

  for (let i = 0; i < m; i++) {
    // 1) 현재 행을 히스토그램 높이로 업데이트
    for (let j = 0; j < n; j++) {
      heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
    }
    // 2) 업데이트된 히스토그램에서 최대 넓이 구하기
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

// Largest Rectangle in Histogram (스택 활용)
function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;
  const extended = [...heights, 0];  // 마지막에 0을 추가해 스택 비우기

  for (let i = 0; i < extended.length; i++) {
    while (stack.length > 0 && extended[i] < extended[stack[stack.length - 1]]) {
      const h = extended[stack.pop()!];
      const width =
        stack.length === 0 ? i : i - 1 - stack[stack.length - 1];
      maxArea = Math.max(maxArea, h * width);
    }
    stack.push(i);
  }

  return maxArea;
}
