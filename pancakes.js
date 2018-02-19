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

var sortPancakes = function(pancakes) {

}