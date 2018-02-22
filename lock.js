//to solve the shortest path problem, we use a breadth-first search
var Queue = function() {
  this.array = [];
  this.start = null;
  this.end = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  if (this.length === 0) {
    this.start = 0;
    this.end = 0;
  }
}

var next = function(combination) {
  var result = [];
  var nextNumber = {};
  var prevNumber = {};
  for (var i = 0; i < 9; i++) {
    nextNumber[i] = i + 1;
    prevNumber[i] = i - 1;
  }
  nextNumber[9] = 0;
  prevNumber[0] = 9;
  prevNumber[9] = 1;
  for (var i = 0; i < combination.length; i++) {
    var number = combination[i];
    var next = nextNumber[number];
    var prev = prevNumber[number];
    result.push(combination.slice().splice(i, next));
    result.push(combination.slice().splice(i, prev));
  }
  return result;
}

var openLock = function(deadends, target) {
  var queue = [];
  var start = '0000';
  var nextCom = next(start);
  for (var i = 0; i < nextCom.length; i++) {

  }
}