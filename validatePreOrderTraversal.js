//input: Array (preoder traversal of binary tree (could this binary tree had been a binary search tree))
//each node is greater than the entire left subtree and less than the entire right subtree

var worseValidation = function(array) {
  var innerFunction = function(subArray) {
    var root = subArray[0];
    var partition = 0;
    for (var i = 1; i < subArray.length; i++) {
      var el = subArray[i];
      if (!partition && el > root) {
        partition = i;
      } else if (partition && el <= root) {
        return false;
      }
    }
    if (!partition) {
      return innerFunction(subArray.slice(1));
    } else {
      return innerFunction(subArray.slice(1, partition)) && innerFunction(subArray.slice(partition))
    }
  }
  return innerFunction(array);
}

var withinBounds = function(min, max, number) {
  return min < number && number < max;
}

var evenBetterValidation = function(array) {
  var innerFunction = function(min, max, index) {
    if (index === array.length - 1) {
      return true;
    }
    var el = array[index];
    var nextIndex = index + 1;
    var next = array[nextIndex];
    var result;
    if (next < min) {
      return false;
    }
    if (withinBounds(min, el, next)) {
      result = innerFunction(min, el, index + 1);
      if (typeof result === "boolean") {
        return result;
      }
      // result could be a number and have to go on the right
      nextIndex = result;
      next = array[nextIndex];
    }

    if (withinBounds(el, max, next)) {
      return innerFunction(el, max, nextIndex);
    } else {
      return nextIndex;
    }
  }
  return innerFunction(-Infinity, Infinity, 0);
}

var betterValidation = function(array) {
  var innerFunction = function(min, max, index) {
    var el = array[index];
    var next = array[index + 1];

    var result;
    if (min > el) {
      return false;
    } else if (max < el) {
      return index;
    }

    if (index === array.length - 1) {
      return true;
    }

    if (el < next) {
      result = innerFunction(el, max, index + 1);
    } else {
      result = innerFunction(min, el, index + 1);
    }
    if (typeof result === "number") {
      result = innerFunction(el, max, result);
    }
    return result;
  }
  return innerFunction(Infinity * -1, Infinity, 0);
}

var example1 = [4, 2, 1, 3];
var example2 = [5, 4, 3, 2, 1];
var example3 = [2, 3, 1];
console.log(betterValidation(example1) ? 'PASS' : 'NO PASS');
console.log(betterValidation(example2) ? 'PASS' : 'NO PASS');
console.log(betterValidation(example3) ? 'PASS' : 'NO PASS');





