
var matrix = Array(9);
for (var i = 0; i < 9; i++) {
  matrix[i] = Array(9);
}
matrix[0][0] = 1;

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
    potentialNumbers = Object.keys(potentialNumbers);
    if (!potentialNumbers.length || row > 8 || col > 8) {
      return;
    } else if (row === 8 && col === 8) {
      return matrix;
    }
    for (var i = 0; i < potentialNumbers.length; i++) {
      var potentialNumber = potentialNumbers[i];
      matrix[row][col] = Number(potentialNumber);
      var result;
      if (col === 8) {
        result = innerFunction(row + 1, 0);
      } else {
        result = innerFunction(row, col + 1);
      }
      if (result) {
        return result;
      } else {
        matrix[row][col] = undefined;
        continue;
      }
    }
  }
  return innerFunction(0, 0);
}

console.log(sudoku(matrix));