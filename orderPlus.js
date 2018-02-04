//From LeetCode (Medium)

// In a 2D grid from (0, 0) to (N-1, N-1), every cell contains a 1, except those cells in the given list mines which are 0. What is the largest axis-aligned plus sign of 1s contained in the grid? Return the order of the plus sign. If there is none, return 0.

// An "axis-aligned plus sign of 1s of order k" has some center grid[x][y] = 1 along with 4 arms of length k-1 going up, down, left, and right, and made of 1s. This is demonstrated in the diagrams below. Note that there could be 0s or 1s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1s.

var orderOfLargestPlusSign = function(N, mines) {
  var mineField = {};
  for (var i = 0; i < mines.length; i++) {
    var mine = JSON.stringify(mines[i]);
    mineField[mine] = true;
  }
  var length = mines.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {

    }
  }

}
