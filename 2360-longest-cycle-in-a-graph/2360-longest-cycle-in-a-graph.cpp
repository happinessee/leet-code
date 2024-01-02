class Solution {
public:
    int longestCycle(vector<int>& edges) {
        int edgesLength = edges.size();
        vector<int> visited(edgesLength, -1);
        int longest = -1;

        for (int i = 0; i < edgesLength; i++) {
            if (visited[i] != -1) continue;

            unordered_map<int, int> currentPath;
            int index = i, length = 0;

            while (index != -1 && visited[index] == -1) {
                visited[index] = i;
                currentPath[index] = length;
                index = edges[index];
                length++;

                if (index != -1 && visited[index] == i) {
                    // 사이클 발견
                    longest = max(longest, length - currentPath[index]);
                    break;
                }
            }
        }
        return longest;
    }
};
