//given island(s) of 1's and 0's, return an array consisting of all sizes of island(s).
//an island consist of 1's connected horizontally and vertically (not diagonally).

var island = function(matrix) {
  var result = [];
  var rowLength = matrix.length;
  var colLength = matrix[0].length;
  var addIndices = [[0, 1], [1, 0], [-1, 0], [0, -1]];

  var innerFunction = function(row, col) {
    matrix[row][col] = 0;
    var counter = 1;
    for (var i = 0; i < addIndices.length; i++) {
      var addIndex = addIndices[i];
      var newRow = row + addIndex[0];
      var newCol = col + addIndex[1];
      if (newRow === rowLength || newCol === colLength || newRow < 0 || newCol < 0) {
        continue;
      }
      if (matrix[newRow][newCol]) {
        counter += innerFunction(newRow, newCol);
      }
    }
    return counter
  }
  for (var i = 0; i < rowLength; i++) {
    for (var j = 0; j < colLength; j++) {
      if (matrix[i][j]) {
        result.push(innerFunction(i, j));
      }
    }
  }
  return result;
}