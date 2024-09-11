class Solution {
    func findTheCity(_ n: Int, _ edges: [[Int]], _ distanceThreshold: Int) -> Int {
        // 1. 인접 행렬을 초기화 (모든 거리를 무한으로 설정)
    let inf = Int.max / 2
    var dist = Array(repeating: Array(repeating: inf, count: n), count: n)
    
    // 2. 자기 자신으로 가는 거리는 0으로 초기화
    for i in 0..<n {
        dist[i][i] = 0
    }
    
    // 3. 주어진 간선 정보로 초기 거리를 설정
    for edge in edges {
        let from = edge[0]
        let to = edge[1]
        let weight = edge[2]
        dist[from][to] = weight
        dist[to][from] = weight // 양방향 그래프이므로 양쪽 설정
    }
    
    // 4. 플로이드-와샬 알고리즘을 사용해 모든 도시 간의 최단 거리를 구함
    for k in 0..<n {
        for i in 0..<n {
            for j in 0..<n {
                if dist[i][k] + dist[k][j] < dist[i][j] {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
    
    // 5. 각 도시에서 distanceThreshold 이하로 도달할 수 있는 도시의 수를 셈
    var minReachableCities = Int.max
    var cityWithMinReachableCities = 0
    
    for i in 0..<n {
        var reachableCities = 0
        for j in 0..<n {
            if dist[i][j] <= distanceThreshold {
                reachableCities += 1
            }
        }
        
        // 6. 더 적은 도시로 도달할 수 있거나, 동일한 수일 경우 더 큰 번호의 도시를 선택
        if reachableCities <= minReachableCities {
            minReachableCities = reachableCities
            cityWithMinReachableCities = i
        }
    }
    
    return cityWithMinReachableCities
    }
}