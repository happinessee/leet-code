class Solution {
public:
    static string repeatString(const string& word, int k) {
    stringstream ss;
    for (int i = 0; i < k; ++i) {
        ss << word;
    }
    return ss.str();
}
    
    int maxRepeating(string sequence, string word) {
        int result = 1;
        while(1) {
            if (sequence.find(repeatString(word, result)) != string::npos)
                result += 1;
            else break;
        }
        return result - 1;
    }
};