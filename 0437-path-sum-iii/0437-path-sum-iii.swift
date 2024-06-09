/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func pathSum(_ root: TreeNode?, _ targetSum: Int) -> Int {
        if (root == nil) {
            return 0
        }
        
        var result = 0
        var sumArray:[Int] = []
        
        func dfs(_ parent: TreeNode?, _ sumArray: inout [Int]) -> Void {
            guard let parent = parent else { return }
            
            sumArray.append(0)
            for i in 0..<sumArray.count {
                sumArray[i] += parent.val
            }
            
            result += sumArray.filter {$0 == targetSum}.count
            
            if let left = parent.left {
                dfs(left, &sumArray)
            }
            if let right = parent.right {
                dfs(right, &sumArray)
            }
            
            sumArray.popLast()
            for i in 0..<sumArray.count {
                sumArray[i] -= parent.val
            }
        }
        
        dfs(root, &sumArray)
        return result
    }
}