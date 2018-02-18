//input: Array (preoder traversal of binary tree (could this binary tree had been a binary search tree))
//each node is greater than the entire left subtree and less than the entire right subtree

var shittyValidation = function(array) {
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

var betterValidation = function(array) {
  var innerFunction = (min, max, index) {
    var el = array[index];
    var next = array[index + 1];

  }
  return innerFunction(Infinity * -1, Infinity, 0);
}
