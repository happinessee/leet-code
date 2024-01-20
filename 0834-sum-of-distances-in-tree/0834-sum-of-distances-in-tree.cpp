class Solution {
public:
    void dfs1(int node, int parent, vector<vector<int>>& graph, vector<int>& childCount, vector<int>& distanceSum) {
        for (int child : graph[node]) {
            if (child != parent) {
                dfs1(child, node, graph, childCount, distanceSum);
                childCount[node] += childCount[child];
                distanceSum[node] += distanceSum[child] + childCount[child];
            }
        }
        childCount[node] += 1; // Including the node itself
    }

    void dfs2(int node, int parent, vector<vector<int>>& graph, int n, vector<int>& childCount, vector<int>& distanceSum) {
        for (int child : graph[node]) {
            if (child != parent) {
                distanceSum[child] = distanceSum[node] - childCount[child] + (n - childCount[child]);
                dfs2(child, node, graph, n, childCount, distanceSum);
            }
        }
    }

    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }

        vector<int> childCount(n, 0), distanceSum(n, 0);
        dfs1(0, -1, graph, childCount, distanceSum); // First DFS
        dfs2(0, -1, graph, n, childCount, distanceSum); // Second DFS

        return distanceSum;
    }
};
