/**
 * @param {string} s
 * @return {number}
 */
var calculateScore = function(s) {
  // 26개의 스택 배열: 각 인덱스는 0부터 25까지 (a부터 z)
  const stacks = Array.from({ length: 26 }, () => []);
  let score = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const idx = char.charCodeAt(0) - 97;      // 현재 문자의 0-indexed 값
    const mirrorIdx = 25 - idx;               // mirror 문자의 0-indexed 값
    
    if (stacks[mirrorIdx].length > 0) {
      // mirror 스택에 이미 매칭되지 않은 인덱스가 있다면, 그 중 가장 가까운(최근의) j를 꺼냄
      const j = stacks[mirrorIdx].pop();
      score += i - j;
    } else {
      // 현재 문자를 아직 매칭되지 않은 리스트에 추가
      stacks[idx].push(i);
    }
  }
  
  return score;
};

const isMirror = (str1, str2) => {
  return (str1.charCodeAt(0) - 97) + (str2.charCodeAt(0) - 97) === 25;
};
