// in a particular state, each cell can be alive or dead
// the rules for state -> next state transition are:
// a live cell has less than two live neighbors (0 or 1 live neighbors) it dies (underpopulation)
// a live cell has two-three live neighbors,, it remains alive
// a live cell has more than three live neighbors, it dies (overpopulation)
// a dead cell with three live neighbors becomes alive (reproduction)
// a cell has up to 8 neighbors
// n x m matrix, write the function for outputting the next state (given a state)

var helper = function(row, col, matrix) {
  const state = matrix[row][col];
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  var counter = 0;
  var addIndex = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
  for (var i = 0; i < addIndex.length; i++) {
    var neighborRow = addIndex[i][0] + row;
    var neighborCol = addIndex[i][1] + col;
    if (neighborRow >= rowLength || neighborRow < 0 || neighborCol < 0 || neighborCol >= colLength) {
      continue;
    }
    if (matrix[neighborRow][neighborCol]) {
      counter++;
    }
  }
  return state ? (counter === 2 || counter === 3) : (counter === 3);
}

var gameOfLife = function(matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  var result = [];
  for (var i = 0; i < rowLength; i++) {
    result[i] = [];
    for (var j = 0; j < colLength; j++) {
      result[i][j] = helper(i, j, matrix);
    }
  }
  return result;
}

//now we will deal with an infinite map where coordinates range from negative infinity to positive infinity
//the parameter will be an object of coordinate keys with values true or false for live or dead cells

var gameOfLife2 = function(liveCellMap) {
  var result = {};
  var surroundingCells = {};
  var coordinates = Object.keys(liveCellMap);
  var addIndex = [[0, -1], [-1, 0], [1, 0], [0, 1], [1, 1], [-1, -1], [1, -1], [-1, 1]];
  for (var i = 0; i < coordinates.length; i++) {
    var coordinate = JSON.parse(coordinates[i]);
    for (var j = 0; j < addIndex.length; j++) {
      var neighborRow = coordinate[0] + addIndex[j][0];
      var neighborCol = coordinate[1] + addIndex[j][1];
      var key = JSON.stringify([neighborRow, neighborCol]);
      surroundingCells[key] = (surroundingCells[key] || 0) + 1;
    }
  }
  var surCoordinates = Object.keys(surroundingCells);
  for (var i = 0; i < surCoordinates.length; i++) {
    var surCoordinate = surCoordinates[i];
    var liveCount = surroundingCells[surCoordinate];
    if (liveCellMap[surCoordinate]) {
      if (liveCount === 2 || liveCount === 3) {
        result[surCoordinate] = true;
      }
    }  else {
      if (liveCount === 3) {
        result[surCoordinate] = true;
      }
    }
  }
  return result;
}

var example = [[false, false, true],
               [true, false, true],
               [false, true, true]];
var exampleResult = [[false, true, false],
                     [false, false, true],
                     [false, true, true]];

console.log(JSON.stringify(helper(0, 1, example)));
console.log(JSON.stringify(gameOfLife(example)));
console.log(JSON.stringify(gameOfLife(example)) === JSON.stringify(exampleResult) ? 'PASS' : 'GG');

var example3 = {};


// [0, 1], [1, 2], [2, 1], [2, 2]
var coordinates3 = [[0, 2], [1, 0], [1, 2], [2, 1], [2, 2]].map((coordinate) => JSON.stringify(coordinate));
console.log(coordinates3);

for (var i = 0; i < coordinates3.length; i++) {
  var coordinate = coordinates3[i];
  example3[coordinate] = true;
}

console.log(example3);
