var locatePancake = function(start, end, pancakes, target) {
  var innerFunction = function(start, end) {
    var midIndex = Math.floor((end + start) / 2);
    var midElement = pancakes[midIndex];
    if (start > end) {
      return start;
    }
    if (midElement < target) {
      return innerFunction(midIndex + 1, end);
    } else if (midElement > target) {
      return innerFunction(start, midIndex - 1);
    } else {
      return midIndex;
    }
  }
  return innerFunction(start, end);
}

var flip = function(index, pancakes) {
  var mid = Math.floor((index + 1) / 2)
  for (var i = 0; i < mid; i++) {
    var pancake = pancakes[i];
    var endIndex = index - i;
    var temp = pancakes[endIndex];
    pancakes[endIndex] = pancake;
    pancakes[i] = temp;
  }
}

var sortPancakes = function(pancakes) {
  var length = pancakes.length;
  for (var i = 1; i < length; i++) {
    var pancake = pancakes[i];
    var index = locatePancake(0, i - 1, pancakes, pancake);
    console.log('THIS IS THE INDEX', index);
    if (index === i) {
      continue;
    }
    flip(i, pancakes);
    console.log(pancakes);
    var smth = i - index;
    flip(smth, pancakes);
    console.log(pancakes);
    flip(smth - 1, pancakes);
    console.log(pancakes);
    flip(i, pancakes);
    console.log(pancakes);
  }
  return pancakes;
}

var iHOP = [4, 3, 2, 1, 5];
var iHOP2 = [1, 2, 1, 6, 2, 3, 8];
var iHOP3 = [3, 2, 1, 5, 4, 7];
console.log(sortPancakes(iHOP));
console.log(sortPancakes(iHOP2));
console.log(sortPancakes(iHOP3));
