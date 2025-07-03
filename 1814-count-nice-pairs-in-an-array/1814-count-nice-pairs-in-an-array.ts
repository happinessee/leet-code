function countNicePairs(nums: number[]): number {
  const countMap = new Map<number, number>();
  const MOD = 1e9 + 7;
  let result = 0;

  for (const num of nums) {
    const diff = num - reverseNum(num);
    const prev = countMap.get(diff) || 0;

    result = (result + prev) % MOD;

    countMap.set(diff, prev + 1);
  }

  return result;
}
	
// function reverseNum(num: number): number {
// 	return parseInt(num.toString().split("").reverse().join(""));
// }

function reverseNum(num: number): number {
  let rev = 0;
  let x = num;
  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return rev;
}