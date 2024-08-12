class UnionFind {
    var parent: [Int]

    public init(
        size: Int
    ) {
        self.parent = Array(0..<size)
    }
    
    public func union(_ x: Int, _ y: Int) {
        let xi = find(x)
        let yi = find(y)
        parent[xi] = yi
    }
    
    public func find(_ x: Int) -> Int {
        if x == parent[x] {
            return x
        } else {
            let xi = find(parent[x])
            parent[x] = xi
            return xi
        }
    }
}

class Solution {
    func reachableNodes(_ n: Int, _ edges: [[Int]], _ restricted: [Int]) -> Int {
        let unionFind = UnionFind(size: n)
        let restrictedSet = Set(restricted)
        for edge in edges {
            let (u, v) = (edge[0], edge[1])

            if !restrictedSet.contains(u) && !restrictedSet.contains(v) {
                unionFind.union(v, u)
            }
        }
        
        let root = unionFind.find(0)
        for i in 0..<n {
            if unionFind.parent[i] != root {
                unionFind.find(i)
            }
        }
        
        return unionFind.parent.reduce(0) { $1 == root ? $0 + 1 : $0 }
    }
}