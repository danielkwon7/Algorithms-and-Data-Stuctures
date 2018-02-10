

var sudoku = function(matrix) {

  var innerFunction = function(row, col) {
    var potentialNumbers = {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
    };
    for (j = 0; j < 9; j++) {
      if (j === col) {
        continue;
      }
      var number = matrix[row][j];
      if (number) {
        delete potentialNumbers[number];
      }
    }
    for (i = 0; i < 9; i++) {
      if (i === row) {
        continue;
      }
      var number = matrix[i][col];
      if (number) {
        delete potentialNumbers[number];
      }
    }
    var rowBlock = Math.floor(row / 3);
    var colBlock = Math.floor(col / 3);
    for (var i = rowBlock; i < rowBlock + 3; i++) {
      for (var j = colBlock; j < colBlock + 3; j++) {
        if (i === row && j === col) {
          continue;
        }
        var number = matrix[i][j];
        if (number) {
          delete potentialNumbers[number];
        }
      }
    }

  }
}