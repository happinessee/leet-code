class Solution {
public:
    int maxRepeating(string sequence, string word) {
        int result = 0;
        string substring = word;
        while(1) {
            if (sequence.find(substring) != string::npos) {
                substring += word;
                result++;
                }
            else break;
        }
        return result;
    }
};