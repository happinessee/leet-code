class Solution {
	func findClosestElements(_ arr: [Int], _ k: Int, _ x: Int) -> [Int] {
		var left = 0
		var right = arr.count - 1
		while left < right {
			let mid = left + (right - left) / 2
			if arr[mid] < x {
				left = mid + 1
			} else {
				right = mid
			}
		}

		// left와 right를 초기화하지만, 새로운 변수명 사용을 피하고 범위 검사 추가
		right = left
		left = left - 1

		while right - left - 1 < k {
			if left == -1 {  // left가 0 미만이 되는 것을 방지
				right += 1
			} else if right == arr.count {  // right가 배열 길이 이상이 되는 것을 방지
				left -= 1
			} else if left >= 0 && (x - arr[left]) <= (arr[right] - x) {  // left와 right 인덱스가 배열 범위 내에 있는지 확인
				left -= 1
			} else {
				right += 1
			}
		}
		return Array(arr[left+1...right-1])
	}
}
