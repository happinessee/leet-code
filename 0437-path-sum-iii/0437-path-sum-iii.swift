class Solution {
    func pathSum(_ root: TreeNode?, _ targetSum: Int) -> Int {
        var paths = 0
        var occurrences: Dictionary<Int, Int> = [0 : 1]
        
        func dfs(_ node: TreeNode?, _ currentSum: Int) {
            guard let node = node else { return }
            let sum = currentSum + node.val
            paths += occurrences[sum - targetSum, default: 0]
            occurrences[sum, default: 0] += 1
            
            dfs(node.left, sum)
            dfs(node.right, sum)
            
            occurrences[sum, default: 0] -= 1
        }
        dfs(root, 0)
        return paths
    }
}