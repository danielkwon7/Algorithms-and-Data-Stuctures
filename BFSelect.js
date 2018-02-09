var Tree = function(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('Child already existing');
  }
  return child;
}

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
}

Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    this.children.splice(index, 1);
  } else {
    throw new Error('Node not an immediate child');
  }
}

var Queue = function() {
  var storage = [];

  this.push = function(item) {
    storage.push(item);
  }

  this.pop = function() {
    return storage.shift();
  }
}

Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();
  var results = [];
  var item;
  queue.push({ tree: this, depth: 0 });

  while (item = queue.pop()) {
    var tree = item.tree;
    var depth = item.depth;
    if (filter(tree.value, depth)) {
      results.push(tree.value);
    }
    for (var i = 0; i < tree.children.length; i++) {
      var child = tree.children[i];
      queue.push({ tree: child, depth: depth + 1 });
    }
  }

  return results;
}

