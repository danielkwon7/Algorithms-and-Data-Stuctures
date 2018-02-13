// In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

// Return the minimum number of rabbits that could be in the forest.



var rabbits = function(answers) {
  var result = 0;
  var carrot = {};
  for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];
    if (carrot[answer]) {
      carrot[answer]++;
    } else {
      carrot[answer] = 1;
    }
  }
  console.log('THIS IS THE CARROT', carrot);
  for (var key in carrot) {
    var expected = Number(key) + 1;
    var count = carrot[key];
    if (expected >= count) {
      result += expected;
      console.log('THIS IS THE RESULT', result);
    } else {
      result += ( expected * ( Math.ceiling(count / expected) ) );
    }
  }
  return result;
}

var answers1 = [1, 1, 2];
var results1 = 5;

var answers2 = [10, 10, 10];
var results2 = 11;

var answers3 = [1, 1, 1, 1];
var results3 = 4;

console.log(rabbits(answers1));
console.log(rabbits(answers2));
console.log(rabbits(answers3));
console.log(rabbits(answers1) === results1 ? 'PASS' : 'GG');
console.log(rabbits(answers2) === results2 ? 'PASS' : 'GG');
console.log(rabbits(answers3) === results3 ? 'PASS' : 'GG');


