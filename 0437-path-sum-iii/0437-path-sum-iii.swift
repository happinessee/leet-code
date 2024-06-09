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
        var sumArray = [Int](repeating: 0, count: 1000)
        
        func dfs(_ parent: TreeNode?, _ sumArray: inout [Int], _ depth: Int) -> Void {
            guard let parent = parent else { return }
    
            for i in 0..<depth+1 {
                sumArray[i] += parent.val
                if sumArray[i] == targetSum {
                    // print(sumArray[0..<depth+1])
                    result += 1
                }
            }
            
            if let left = parent.left {
                dfs(left, &sumArray, depth + 1)
            }
            if let right = parent.right {
                dfs(right, &sumArray, depth + 1)
            }
            
            for i in 0..<depth+1 {
                sumArray[i] -= parent.val
            }
        }
        
        dfs(root, &sumArray, 0)
        return result
    }
}