/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function (tasks, sessionTime) {
  const n = tasks.length;
  const totalStates = 1 << n; // 2^n개의 상태
  const dp = new Array(totalStates).fill(Infinity);
  dp[0] = 0;

  const sessionSums = new Array(totalStates).fill(0);

  for (let state = 1; state < totalStates; state++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (state & (1 << i)) {
        sum += tasks[i];
      }
    }
    sessionSums[state] = sum;
  }

  for (let state = 1; state < totalStates; state++) {
    for (let subset = state; subset > 0; subset = (subset - 1) & state) {
      if (sessionSums[subset] <= sessionTime) {
        dp[state] = Math.min(dp[state], dp[state ^ subset] + 1);
      }
    }
  }

  return dp[totalStates - 1];
}