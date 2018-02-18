var matrix = Array(9);
for (var i = 0; i < 9; i++) {
  matrix[i] = Array(9);
}
matrix[0][0] = 8;
// matrix[0][1] = 9;
// matrix[0][2] = 3;
// matrix[0][3] = 4;
// matrix[0][4] = 5;
// matrix[0][5] = 6;
// matrix[1][1] = 4;

var getPotentialNumbers = function(matrix, row, col) {
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
  for (var j = 0; j < 9; j++) {
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
  var rowBlock = Math.floor(row / 3) * 3;
  var colBlock = Math.floor(col / 3) * 3;
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
  return Object.keys(potentialNumbers);
}

var calculateNext = function(pos) {
  var row = pos[0];
  var col = pos[1];
  if (col === 8) {
    return [row + 1, 0];
  } else {
    return [row, col + 1];
  }
}

var sudoku = function(matrix) {
  var innerFunction = function(row, col) {
    var result;
    if (matrix[row][col]) {
      result = innerFunction.apply(null, calculateNext([row, col]));
      if (result) {
        return result;
      }
      return;
    }
    var potentialNumbers = getPotentialNumbers(matrix, row, col);
    if (!potentialNumbers.length) {
      return;
    } else if (row === 8 && col === 8) {
      matrix[row][col] = Number(potentialNumbers[0]);
      return matrix;
    }
    for (var i = 0; i < potentialNumbers.length; i++) {
      var potentialNumber = potentialNumbers[i];
      matrix[row][col] = Number(potentialNumber);
      result = innerFunction.apply(null, calculateNext([row, col]));
      if (result) {
        return result;
      }
      matrix[row][col] = undefined;
    }
  }
  return innerFunction(0, 0);
}

console.log(sudoku(matrix));