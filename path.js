var paths = function(matrix) {
  var counter = 0;
  var rowLength = matrix.length;
  var colLength = matrix[0].length;
  var direction = [[0, 1], [1, 0]];
  var innerFunction = function(row, col) {
    if (row === rowLength - 1 && col === colLength - 1) {
      counter++;
      return;
    } else if (row >= rowLength || col >= colLength) {
      return;
    }
    for (var i = 0; i < 2; i++) {
      var row = row + direction[i][0];
      var col = col + direction[i][1];
      if (row !== rowLength && col !== colLength) {
        innerFunction(row, col);
      } else {
        continue;
      }
    }
  }
  innerFunction(0, 0);
  return counter;
}