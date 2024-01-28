class Solution {
public:
    vector<vector<int>> getAncestors(int n, vector<vector<int>>& edges) {
        vector<vector<int>> ans(n), graph(n);
        for (auto& e : edges)
            graph[e[0]].push_back(e[1]);
        for (int i = 0; i < n; i++)
            dfs(i, i, ans, graph);
        return ans;
    }
    void dfs(int x, int curr, vector<vector<int>>& ans,
             vector<vector<int>>& graph) {
        for (auto& ch : graph[curr])
            if (ans[ch].size() == 0 || ans[ch].back() != x) {
                ans[ch].push_back(x);
                dfs(x, ch, ans, graph);
            }
    }
};