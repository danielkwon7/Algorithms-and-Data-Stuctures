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

