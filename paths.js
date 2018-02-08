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
      var newRow = row + direction[i][0];
      var newCol = col + direction[i][1];
      if (newRow !== rowLength && newCol !== colLength) {
        innerFunction(newRow, newCol);
      } else {
        continue;
      }
    }
  }
  innerFunction(0, 0);
  return counter;
}

//now let's implement robotPaths that can traverse all directions and cannot visit the same spot twice
var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return this[i][j];
  }
  return board;
}

var robotPaths = function(n, board, i, j) {
  if (!board) {
    board = makeBoard(n);
    i = j = 0;
  }

  if (i < 0 || i >= n || j < 0 || j >= n || board.hasBeenVisited(i, j)) {
    return 0;
  }

  if (i === n - 1 && j === n - 1) {
    return 1;
  }

  board.togglePiece(i, j);

  var result = robotPaths(n, board, i, j + 1) +
  robotPaths(n, board, i, j - 1) +
  robotPaths(n, board, i + 1, j) +
  robotPaths(n, board, i - 1, j);

  board.togglePiece(i, j);
  return result;
}

//mobile patterns
//given a 3 x 3 matrix, how many patterns can be made given the specified length (not including the starting node) and the fact that wec annot traverse a previously stepped upon node

var mobilePatterns = function(pathLength) {
  var steppedNodes = {};
  var potentialCoordinates = {};
  var result = 0;
  potentialCoordinates[JSON.stringify([0, 0])] = [[0, 1], [1, 0], [1, 1], [2, 1], [1, 2]];
  potentialCoordinates[JSON.stringify([0, 1])] = [[0, 0], [0, 2], [1, 1], [1, 0], [1, 2], [2, 1], [2, 2]]
  potentialCoordinates[JSON.stringify([1, 1])] = [[0, 0], [1, 0], [0, 1], [2, 0], [2, 1], [0, 2], [1, 2], [2, 2]];
  var recurse = function(i, j, length, steppedNodes) {
    var counter = 0;
    length++;
    var coordinates = (potentialCoordinates[JSON.stringify([i, j])] || []).filter(function(coordinates) {
      if (!steppedNodes[JSON.stringify(coordinates)]) {
        return true;
      }
    });
    var newSteppedNodes = Object.assign({}, steppedNodes);
    if (length === pathLength) {
      return 1;
    }
    if (!coordinates.length) {
      return 0;
    }
    for (var i = 0; i < coordinates.length; i++) {
      var coordinate = coordinates[i];
      var row = coordinate[0];
      var col = coordinate[1];
      counter += recurse(row, col, length, newSteppedNodes);
    }
    return counter;
  }
  return 4 * recurse(0, 0, 0, {}) + 4 * recurse(0, 1, 0, {}) + recurse(1, 1, 0, {});
}

//given a matrix of numbers, find the cheapest path from the top left corner to the bottom right corner where its cost is determined by the sum of all traversed number (including the start and the end)

//we can only traverse right or down to reach the destination

var cheapestPath = function(matrix) {
  var object = {};
  var rowLength = matrix.length;
  var colLength = matrix[0].length;
  for (var i = 0; i < rowLength; i++) {
    for (var j = 0; j < colLength; j++) {
      var coordinates = JSON.stringify([i, j]);
      var neighborRow = i - 1;
      var neighborCol = j - 1;
      var upCoordinates = JSON.stringify([i, neighborCol]);
      var leftCoordinates = JSON.stringify([neighborRow, j]);
      var upNeighbor = object[upCoordinates];
      var leftNeighbor = object[leftCoordinates]
      var cost = matrix[i][j];
      if (upNeighbor !== undefined && leftNeighbor !== undefined) {
        object[coordinates] = Math.min(upNeighbor, leftNeighbor) + cost;
      } else {
        object[coordinates] = (upNeighbor || leftNeighbor || 0) + cost;
      }
    }
  }
  console.log(object);
  return object[JSON.stringify([rowLength - 1, colLength - 1])];
}

//[1,2,3]
//[4,5,6]
//[7,8,9]

var example1 = [[1,1], [1,1]];
var example2 = [[1,2,3], [4,5,6], [7,8,9]];
console.log(cheapestPath(example1) === 2 ? "PASS" : "GG");
console.log(cheapestPath(example2) === 1 + 2 + 3 + 6 + 9 ? "PASS" : "GG")



