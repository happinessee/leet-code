/**
 * @param {string} s
 * @return {number}
 */
var calculateScore = function(s) {
  const stacks = Array.from({ length: 26 }, () => []);
  let score = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const idx = char.charCodeAt(0) - 97;
    const mirrorIdx = 25 - idx;
    
    if (stacks[mirrorIdx].length > 0) {
      const j = stacks[mirrorIdx].pop();
      score += i - j;
    } else {
      stacks[idx].push(i);
    }
  }
  
  return score;
};
