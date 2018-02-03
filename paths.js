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



