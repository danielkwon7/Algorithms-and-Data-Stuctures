var rotateMatrix = function(matrix) {
  var rowL = matrix.length;
  var colL = matrix[0].length;

  var result = Array(colL);
  for (var i = 0; i < colL; i++) {
    result[i] = Array(rowL);
  }

  var rowC = 0;
  for (var i = rowL - 1; i >= 0; i--) {
    for (var j = 0; j < colL; j++) {
      var el = matrix[i][j];
      result[j][rowC] = el;
      rowC++
    }
    rowC = 0;
  }
  return result;
}