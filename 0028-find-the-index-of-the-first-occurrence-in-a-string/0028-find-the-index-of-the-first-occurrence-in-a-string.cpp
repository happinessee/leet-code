class Solution {
public:
    static vector<int> buildTable(string needle) {
        int length = 0, i = 1, needleLength = needle.size();
        vector<int> table(needleLength, 0);
        
        while(i < needleLength) {
            if (needle[i] == needle[length]) {
                length++;
                table[i] = length;
                i++;
            } else {
                if (length != 0) 
                    length = table[length - 1];
                else {
                    table[i] = 0;
                    i++;
                }
            }
        }
        return table;
    }
    
    int strStr(string haystack, string needle) {
        int i = 0, m = 0, haystackLength = haystack.size(), needleLength = needle.size();
        
        if (needleLength > haystackLength) return -1;
        
        vector<int> table = buildTable(needle);
        while(m + i < haystackLength) {
            if (needle[i] == haystack[m + i]) {
                if (i == needleLength - 1) return m;
                i++;
            } else {
                if (i != 0) {
                    m += i - table[i - 1]; // m을 올바르게 업데이트
                    i = table[i - 1] > 0 ? table[i - 1] : 0; // i를 table 값으로 업데이트, table[i-1]이 0이면 i도 0으로 설정
                } else {
                    m++;
                }
            }
        }
        return -1;
    }
};