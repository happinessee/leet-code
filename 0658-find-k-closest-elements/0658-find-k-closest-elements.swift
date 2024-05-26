class Solution {
    func makeDistanceArray(_ arr: [Int], _ x: Int) -> [Int] {
		var distanceArray = [Int]()
		for i in 0..<arr.count {
			distanceArray.append(abs(arr[i] - x))
		}
		return distanceArray
    }
    
    func findClosestElements(_ arr: [Int], _ k: Int, _ x: Int) -> [Int] {
		var distanceArray = makeDistanceArray(arr, x)
		var result = [Int]()
		var sortedArr = arr.enumerated().sorted { (a, b) in
			if distanceArray[a.offset] == distanceArray[b.offset] {
				return a.element < b.element
			}
			return distanceArray[a.offset] < distanceArray[b.offset]
		}
		for i in 0..<k {
			result.append(sortedArr[i].element)
		}
		return result.sorted()
    }
}