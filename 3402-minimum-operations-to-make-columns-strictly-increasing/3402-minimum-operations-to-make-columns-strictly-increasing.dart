class Solution {
  int minimumOperations(List<List<int>> grid) {
    final m = grid.length;
    final n = grid[0].length;
    int operations = 0;

    for (int col = 0; col < n; col++) {
      for (int row = 1; row < m; row++) {
        if (grid[row][col] <= grid[row - 1][col]) {
          final diff = grid[row - 1][col] + 1 - grid[row][col];
          operations += diff;
          grid[row][col] += diff;
        }
      }
    }

    return operations;
  }
}
