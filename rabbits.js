// In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

// Return the minimum number of rabbits that could be in the forest.

var rabbits = function(answers) {
  var result = 0;
  var carrot = {};
  for (var i = 0; i < answers.length; i++) {
    if (carrot[i]) {
      carrot[i]++;
    } else {
      carrot[i] = 1;
    }
  }
  for (var key in carrot) {
    var expected = Number(key) + 1;
    var count = carrot[key];
    if (expected >= count) {
      result += expected;
    } else {
      result += expected * ( Math.ceiling(count / expected) );
    }
  }
  return result;
}