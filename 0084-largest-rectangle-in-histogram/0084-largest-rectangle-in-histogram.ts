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
};
