class Solution {
public:
    int climbStairs(int n) {
        if (n < 4) return n;
        vector<int> resultVector(n);
        resultVector[0] = 1;
        resultVector[1] = 2;
        resultVector[2] = 3;
        for (int i = 3; i < n; i++) {
            resultVector[i] = resultVector[i - 1] + resultVector[i - 2];
        }
        return resultVector.back();
    }
};