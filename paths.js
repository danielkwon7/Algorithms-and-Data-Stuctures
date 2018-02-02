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

//given a matrix of numbers, find the cheapest path from the top left corner to the bottom right corner where its cost is determined by the sum of all traversed number (including the start and the end)

//we can only traverse right or down to reach the destination

var cheapestPath = function(matrix) {
  var object = {};
  var rowLength = matrix.length;
  var colLength = matrix[0].length;
  for (var i = 0; i < rowLength; i++) {
    var neighborRow = i - 1;
    for (var j = 0; j < colLength; j++) {
      var neighborCol = j - 1;
      var upNeighbor = matrix[neighborRow, j] || 0;
      var leftNeighbor = matrix[i, neighborCol] || 0;
      var coordinates = JSON.stringify([i, j]);
      var cost = matrix[i][j];
      if (upNeighbor && leftNeighbor) {
        object[coordinates] = Math.min(upNeighbor, leftNeighbor) + cost;
      } else {
        object[coordinates] = Math.max(upNeighbor, leftNeighbor) + cost;
      }
    }
  }
}



