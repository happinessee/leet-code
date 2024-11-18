/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    
    // 총합이 k로 나누어 떨어지지 않으면 바로 false
    if (totalSum % k !== 0) return false;
    
    const targetSum = totalSum / k;
    nums.sort((a, b) => b - a); // 큰 수부터 배치하면 더 빠르게 백트래킹 가능
    
    const used = new Array(nums.length).fill(false);
    
    function backtrack(startIndex, k, currentSum) {
        // 모든 부분 집합을 성공적으로 만든 경우
        if (k === 0) return true;
        // 현재 부분 집합의 합이 목표 합에 도달하면, 다음 부분 집합을 찾음
        if (currentSum === targetSum) {
            return backtrack(0, k - 1, 0);
        }
        
        for (let i = startIndex; i < nums.length; i++) {
            // 이미 사용된 요소는 건너뜀
            if (used[i]) continue;
            // 현재 부분 집합의 합이 목표 합을 초과하면 건너뜀
            if (currentSum + nums[i] > targetSum) continue;
            
            // 요소 사용
            used[i] = true;
            if (backtrack(i + 1, k, currentSum + nums[i])) {
                return true;
            }
            // 되돌리기
            used[i] = false;
        }
        return false;
    }
    
    return backtrack(0, k, 0);
};