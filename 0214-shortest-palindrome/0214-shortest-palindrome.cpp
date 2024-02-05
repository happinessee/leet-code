class Solution {
public:
    vector<int> getPartialMatch(const string& s) {
        int m = s.size();
        vector<int> pi(m, 0);
        int begin = 1, matched = 0;
        while (begin + matched < m) {
            if (s[begin + matched] == s[matched]) {
                ++matched;
                pi[begin + matched - 1] = matched;
            } else {
                if (matched == 0) {
                    ++begin;
                } else {
                    begin += matched - pi[matched - 1];
                    matched = pi[matched - 1];
                }
            }
        }
        return pi;
    }
    
    string shortestPalindrome(string s) {
        string rev_s = s;
        reverse(rev_s.begin(), rev_s.end());
        string combined = s + "#" + rev_s;
        vector<int> pi = getPartialMatch(combined);
        return rev_s.substr(0, s.size() - pi.back()) + s;
    }
};
