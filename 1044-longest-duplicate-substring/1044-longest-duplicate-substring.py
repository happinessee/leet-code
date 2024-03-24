class Solution:
    def search_for_duplicate(self, s:str, length:int):
        seen = set()
        for i in range(len(s) - length + 1):
            substring = s[i:i + length]
            if substring in seen:
                return i
            seen.add(substring)
        return -1

    def longestDupSubstring(self, s:str):
        left, right = 1, len(s)
        longest_sub = ""
        
        while left <= right:
            mid = left + (right - left) // 2
            start = self.search_for_duplicate(s, mid)
            
            if start != -1:  # 중복 부분 문자열 발견
                longest_sub = s[start:start + mid]
                left = mid + 1  # 더 긴 부분 문자열을 찾기 위해 범위를 늘림
            else:
                right = mid - 1  # 중복 부분 문자열이 없으므로 범위를 줄임
        
        return longest_sub
