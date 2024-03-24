class Solution:
    def build_partial_match_table(self, pattern: str):
        pattern_length = len(pattern)
        table = [0 for _ in range(pattern_length)]  # 부분 일치 테이블 초기화
        j = 0  # 패턴의 접두사 끝 위치

        # i는 패턴의 접미사 끝 위치를 나타냄
        for i in range(1, pattern_length):
            # 현재 문자가 일치하지 않으면, j를 이전에 계산된 table[j-1] 위치로 이동
            while j > 0 and pattern[i] != pattern[j]:
                j = table[j-1]

            # 현재 문자가 일치하면, 길이를 1 증가시키고 table에 기록
            if pattern[i] == pattern[j]:
                j += 1
                table[i] = j

        return table

    def KMP_search(self, text:str, pattern:str):
        """
        KMP 알고리즘을 사용해 문자열에서 패턴을 검색하는 함수.

        :param text: 검색 대상이 되는 전체 문자열
        :param pattern: 찾고자 하는 패턴
        :return: 
        """
        table = self.build_partial_match_table(pattern)
        j = 0  # 패턴의 위치

        for i in range(len(text)):
            while j > 0 and text[i] != pattern[j]:
                j = table[j-1]

            if text[i] == pattern[j]:
                if j == len(pattern)-1:  # 패턴의 끝에 도달
                    return True
                else:
                    j += 1

        return False
    
    def longestDupSubstring(self, s: str) -> str:
        start = 0
        end = 1
        s_length = len(s)
        substring = ""
        
        while(end < s_length) :
            if (s[start:end] in s[start+1:]):
                substring = s[start:end]
            else :
                start += 1
            end += 1
            
        return substring