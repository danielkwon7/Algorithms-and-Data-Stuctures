//empty chessboard

var checkDiagonal = function(dir, board) {
  return (board[dir[0]] || [])[dir[1]];
}

var check = function(row, col, board) {
  for (var i = 0; i < 8; i++) {
    if (i === row) {
      continue;
    }
    if (board[i][col] === 1) {
      return false;
    }
  }
  for (var j = 0; j < 8; j++) {
    if (j === col) {
      continue;
    }
    if (board[row][j] === 1) {
      return false;
    }
  }
  for (var z = 1; z < 8; z++) {
    var dir1 = [row - z, col - z];
    var dir2 = [row + z, col + z];
    var dir3  = [row - z, col + z];
    var dir4 = [row + z, col - z];
    if (checkDiagonal(dir1, board) || checkDiagonal(dir2, board) || checkDiagonal(dir3, board) || checkDiagonal(dir4, board)) {
      return false;
    }
  }
  return true;
}

var queenSolution = function() {
  var matrix = Array(8);
  for (var i = 0; i < 8; i++) {
    matrix[i] = Array(8);
  }
  var innerFunction = function(row, col, count) {
    if (count === 8) {
      return matrix;
    }
    var placeable = check(row, col, matrix);
    if (row === 7 && col === 7) {
      if (!placeable) {
        return false;
      } else {
        if (count === 7) {
          matrix[row][col] = 1;
          return matrix;
        } else {
          return false;
        }
      }
    }
    var next;
    if (col === 7) {
      next = [row + 1, 0];
    } else {
      next = [row, col + 1];
    }
    var result;
    if (placeable) {
      matrix[row][col] = 1;
      result = innerFunction(next[0], next[1], count + 1);
    }
    if (!result) {
      matrix[row][col] = undefined;
      return innerFunction(next[0], next[1], count);
    } else {
      return result;
    }
  }
  return innerFunction(0, 0, 0);
}

console.log(queenSolution());