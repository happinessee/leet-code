class Solution {
  int lengthOfLastWord(String s) {
    return s.trim().split(" ").last.length;
  }
}