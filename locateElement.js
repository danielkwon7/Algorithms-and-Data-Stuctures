var exampleInput = [
    [10, 20, 30, 40, 41],
    [15, 25, 35, 45, 47],
    [27, 29, 37, 48, 52],
    [32, 33, 39, 50, 55],
];

var exampleInputTarget = 30;

//Locate target within a matrix where moving left across the row or moving down across the column is in ascending order

//The worst-case time complexity is O(n * m) using a brute force method. However if we start from the bottom-left corner or top-right corner, and incrementally move right/left or up/down based upon the positive/negative difference between element and target, we can achieve n + m time complexity where n is a number of rows and m, columns.

var locateElement = function(matrix, target) {
  if (matrix.length === 0) {
    return null;
  }
  var numRow = matrix.length;
  var numCol = matrix[0].length;

  //We will start at the bottom-left corner
  var row = numRow - 1;
  var col = 0;

  while (row >= 0 && col < numCol) {
    var element = matrix[row][col];
    if (element === target) {
      return [row, col];
    }
    if (element > target) {
      row--;
    } else {
      col++;
    }
  }
  return null;
}

var locateElement2 = function(matrix, target) {
  if (matrix.length === 0) {
    return null;
  }
  var numRow = matrix.length;
  var numCol = matrix[0].length;
  var result = null;
  var recursion = function(row, col) {
    if (row < 0 || col > numCol - 1) {
      return;
    }
    var element = matrix[row][col];
    if (element === target) {
      result = [row, col];
      return;
    }
    if (element > target) {
      recursion(row - 1, col);
    } else {
      recursion(row, col + 1);
    }
  }
  recursion(numRow - 1, 0);
  return result;
}

console.log(locateElement([], 30))
console.log(locateElement(exampleInput, 30)) //=> [0, 2]
console.log(locateElement(exampleInput, 48)) //=> [2, 3]
console.log(locateElement(exampleInput, 10)) //=> [0, 0]
console.log(locateElement(exampleInput, 55)) //=> [3, 4]
console.log(locateElement(exampleInput, 1000000)) //=> [3, 4]

console.log(locateElement2([], 30))
console.log(locateElement2(exampleInput, 30)) //=> [0, 2]
console.log(locateElement2(exampleInput, 48)) //=> [2, 3]
console.log(locateElement2(exampleInput, 10)) //=> [0, 0]
console.log(locateElement2(exampleInput, 55)) //=> [3, 4]
console.log(locateElement2(exampleInput, 1000000)) //=> [3, 4]