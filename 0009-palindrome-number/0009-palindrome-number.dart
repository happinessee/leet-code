class Solution {
  bool isPalindrome(int x) {
    return x.toString() == x.toString().split('').reversed.join('');
  }
}