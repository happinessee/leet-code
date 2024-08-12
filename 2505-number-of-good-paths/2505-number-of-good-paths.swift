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
    func numberOfGoodPaths(_ vals: [Int], _ edges: [[Int]]) -> Int {
        let n = vals.count

        var map = [Int: [Int]]()
        for edge in edges {
            map[edge[0], default: [Int]()].append(edge[1])
            map[edge[1], default: [Int]()].append(edge[0])
        }

        var valuesMap = [Int: [Int]]()
        for i in 0..<n {
            valuesMap[vals[i], default: [Int]()].append(i)
        }

        var result = 0
        let set = UnionFind(size: n)

        let sortedValueKeys = valuesMap.keys.sorted()

        for value in sortedValueKeys {
            for node in valuesMap[value]! {
                for adj in (map[node] ?? []) {
                    if vals[node] >= vals[adj] {
                        set.union(node, adj)
                    }
                }
            }

            var unionSizes = [Int: Int]()
            for node in valuesMap[value]! {
                unionSizes[set.find(node), default: 0] += 1
            }

            for size in unionSizes.values {
                result += (size * (size + 1) / 2)
            }
        }

        return result
    }
}