class Solution {
public:
    vector<int> countVisitedNodes(vector<int>& edges) {
        int edgesLength = edges.size();
        vector<int> result(edgesLength, -1);
        unordered_map<int, int> visited; // 노드와 깊이를 저장

        for (int i = 0; i < edgesLength; i++) {
            if (result[i] != -1) continue;
            int nodeIndex = i, length = 0;
            visited.clear();

            while (nodeIndex != -1) {
                if (visited.find(nodeIndex) != visited.end()) {
                    // 사이클 발견
                    int cycleStart = visited[nodeIndex];
                    int cycleLength = length - cycleStart;
                    for (const auto& p : visited) {
                        if (p.second >= cycleStart) {
                            result[p.first] = cycleLength;
                        } else {
                            result[p.first] = length - p.second;
                        }
                    }
                    break;
                }
                if (result[nodeIndex] != -1) {
                    // 이미 방문한 노드
                    for (const auto& p : visited) {
                        result[p.first] = result[nodeIndex] + length - p.second;
                    }
                    break;
                }
                visited[nodeIndex] = length;
                nodeIndex = edges[nodeIndex];
                length++;
            }
        }
        return result;
    }
};
