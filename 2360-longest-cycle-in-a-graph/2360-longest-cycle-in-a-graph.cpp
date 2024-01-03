class Solution {
public:
    int longestCycle(vector<int>& edges) {
        int edgesLength = edges.size();
        vector<int> visited(edgesLength, -1);
        vector<int> currentPath(edgesLength, -1);
        int longest = -1;
        int index = 0, length = 0;

        for (int i = 0; i < edgesLength; i++) {
            if (visited[i] != -1 || edges[i] == -1) continue;

            index = i, length = 0;

            while (visited[index] == -1) {
                visited[index] = i;
                currentPath[index] = length;
                index = edges[index];
                length++;

                if (index == -1) break;
                else if (visited[index] == i) {
                    // 사이클 발견
                    longest = max(longest, length - currentPath[index]);
                    break;
                }
                
            }
            //currentPath.clear();
        }
        return longest;
    }
};