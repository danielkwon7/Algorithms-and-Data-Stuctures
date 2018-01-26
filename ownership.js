var ownership2 = [
  ["B", "C"],
  ["F", "G"],
  ["C", "D"],
  ["B", "H"],
  ["A", "B"],
  ["D", "E"],
  ["B", "F"]
];

var ownership = function(array) {
  var object = {};
  var children = {};
  var root;
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var parent = array[i][0];
    var child = array[i][1];
    children[child] = true;
    if (!object[parent]) {
      object[parent] = [child];
    } else {
      object[parent].push(child);
    }
  }
  Object.keys(object).forEach(function(node) {
    if (!children[node]) {
      root = node;
    }
  })

  var innerFunction = function(start, depth) {
    result.push([start, depth]);
    var children = object[start];
    if (!children) {
      return;
    }
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      innerFunction(child, depth + 1);
    }
  }
  innerFunction(root, 0);
  return result;
}

console.log(ownership(ownership2));

var ownershipIterative = function(array) {
  var object = {};
  var children = {};
  var root;
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var parent = array[i][0];
    var child = array[i][1];
    children[child] = true;
    if (!object[parent]) {
      object[parent] = [child];
    } else {
      object[parent].push(child);
    }
  }
  Object.keys(object).forEach(function(node) {
    if (!children[node]) {
      root = node;
    }
  })
  var stack = [[root, 0]];
  while (stack.length) {
    var length = stack.length;
    var tuple = stack[length - 1];
    var node = tuple[0];

    if (tuple[2] === undefined) {
      result.push(tuple.slice());
    }

    if (!object[node]) {
      stack.pop();
      continue;
    }
    if (tuple[2] === undefined) {
      tuple[2] = 0;
    }

    var children = object[node];
    var index = tuple[2];
    if (children.length === index) {
      stack.pop();
      continue;
    }
    tuple[2]++;
    var child = children[index];
    var depth = tuple[1] + 1;
    stack.push([child, depth]);
  }
  return result;
}

