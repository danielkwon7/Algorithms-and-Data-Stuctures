
//         A
//        / \
//       B   C
//      /\   /\
//      D E  F G


var helper = function(parentToChildren, node, child1, child2) {
  var foundFirst = node === child1;
  var foundSecond = node === child2;
  var children = parentToChildren[node] || [];
  for (var i = 0; i < children.length; i++) {
    var result = helper(parentToChildren, children[i], child1, child2);
    foundFirst = foundFirst || result.foundFirst;
    foundSecond = foundSecond || result.foundSecond;
  }
  return { foundFirst, foundSecond };
}

var commonAncestors = function(array, child1, child2) {
  var parentToChildren = {};
  var roots = {};
  for (var i = 0; i < array.length; i++) {
    var parent = array[i][0];
    var child = array[i][1];
    roots[parent] = true;
    delete roots[child];
    if (!parentToChildren[parent]) {
      parentToChildren[parent] = [child];
    } else {
      parentToChildren[parent].push(child);
    }
  }
  console.log('this is the parentChildren', parentToChildren);
  roots = Object.keys(roots);
  for (var i = 0; i < roots.length; i++) {
    var result = helper(parentToChildren, roots[i], child1, child2);
    if (result.foundFirst && result.foundSecond) {
      return true;
    }
  }
  return false;
}

console.log(commonAncestors(example, 2, 3));

var commonAncestors2 = function(array, child1, child2) {
  var parentToChildren = {};
  var roots = {};
  for (var i = 0; i < array.length; i++) {
    var parent = array[i][0];
    var child = array[i][1];
    roots[parent] = true;
    delete roots[child];
    if (!parentToChildren[parent]) {
      parentToChildren[parent] = [child];
    } else {
      parentToChildren[parent].push(child);
    }
  }
  roots = Object.keys(roots);
  var first = false;
  var second = false;
  var innerFunction = function(node) {
    if (node === child1) {
      first = true;
    }
    if (node === child2) {
      second = true;
    }
    var children = parentToChildren[node] || [];
    for (var i = 0; i < children.length; i++) {
      innerFunction(children[i]);
    }
  }

  for (var i = 0; i < roots.length; i++) {
    var rootNode = roots[i];
    innerFunction(rootNode);
    if (first && second) {
      return true;
    } else {
      first = false;
      second = false;
    }
  }
  return false;
}

//--------------------Below are functions responsible for obtaining lowest common parent-----------

var helper2 = function(parentToChildren, node, child1, child2) {
  var foundFirst = node === child1;
  var foundSecond = node === child2;
  var lca;
  var children = parentToChildren[node] || [];
  for (var i = 0; i < children.length; i++) {
    var result = helper2(parentToChildren, children[i], child1, child2);
    foundFirst = foundFirst || result.foundFirst;
    foundSecond = foundSecond || result.foundSecond;
    if (foundFirst && foundSecond) {
      !!lca ? null : lca = result.lca || node;
    }
  }
  return { foundFirst, foundSecond, lca };
}

var lowestCommonAncestor = function(array, child1, child2) {
  var parentToChildren = {};
  var roots = {};
  for (var i = 0; i < array.length; i++) {
    var parent = array[i][0];
    var child = array[i][1];
    roots[parent] = true;
    delete roots[child];
    if (!parentToChildren[parent]) {
      parentToChildren[parent] = [child];
    } else {
      parentToChildren[parent].push(child);
    }
  }
  roots = Object.keys(roots);
  for (var i = 0; i < roots.length; i++) {
    var rootNode = Number(roots[i]);
    var result = helper2(parentToChildren, rootNode, child1, child2);
    if (result.foundFirst && result.foundSecond) {
      return result.lca;
    }
  }
  return null;
}

var lowestCommonAncestor2 = function(array, child1, child2) {
  var parentToChildren = {};
  var roots = {};
  for (var i = 0; i < array.length; i++) {
    var parent = array[i][0];
    var child = array[i][1];
    roots[parent] = true;
    delete roots[child];
    if (!parentToChildren[parent]) {
      parentToChildren[parent] = [child];
    } else {
      parentToChildren[parent].push(child);
    }
  }
  roots = Object.keys(roots);
  var first = false;
  var second = false;
  var result = null;
  var innerFunction = function(node) {
    console.log('this is the node', node);
    if (node === child1) {
      first = true;
    } else if (node === child2) {
      second = true;
    }
    var children = parentToChildren[node] || [];
    for (var i = 0; i < children.length; i++) {
      var child = Number(children[i]);
      innerFunction(child);
      if (first && second) {
        result = result || node;
      }
    }
  }
  for (var i = 0; i < roots.length; i++) {
    var node = Number(roots[i]);
    innerFunction(node);
    first = false;
    second = false;
  }
  return result;
}

var example = [[1, 2], [1, 3]];
var example2 = [[1,2], [1,3], [2, 4], [2, 5]];

console.log('this should return 1', lowestCommonAncestor(example, 2, 3));
console.log('this should return 1', lowestCommonAncestor(example, 1, 3));
console.log('this should return 2', lowestCommonAncestor(example2, 4, 5));
console.log('this should return 1', lowestCommonAncestor2(example, 2, 3));
console.log('this should return 1', lowestCommonAncestor2(example, 1, 3));
console.log('this should return 2', lowestCommonAncestor2(example2, 4, 5));
