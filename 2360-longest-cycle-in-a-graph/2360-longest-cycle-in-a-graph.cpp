#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int longestCycle(vector<int>& edges) {
        int n = edges.size();
        vector<int> visited(n, -1), finished(n, 0);
        int longest = -1;

        for (int start = 0; start < n; ++start) {
            if (finished[start]) continue; // 이미 처리된 노드는 건너뜁니다.

            int current = start, length = 0;
            unordered_map<int, int> cycleLength;

            while (current != -1 && visited[current] != start && !finished[current]) {
                visited[current] = start; // 현재 노드를 방문 처리합니다.
                cycleLength[current] = length++;
                current = edges[current];
            }

            if (current != -1 && visited[current] == start) {
                // 사이클을 찾았으며, 사이클의 길이를 계산합니다.
                longest = max(longest, length - cycleLength[current]);
            }

            // 경로에 포함된 모든 노드를 처리 완료로 표시합니다.
            for (auto &[node, _] : cycleLength) {
                finished[node] = 1;
            }
        }

        return longest;
    }
};
