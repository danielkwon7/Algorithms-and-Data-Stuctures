var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
}

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  while (node) {
    if (node.value === target) {
      return true;
    }
    node = node.next;
  }
  return false;
}

LinkedList.prototype.addToTail = function(value) {
  var node = this.makeNode(value);
  if (!this.head) {
    this.head = node;
  }
  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
}

LinkedList.prototype.removeHead = function() {
  var head = this.head;
  if (!this.head) {
    return null;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
  }
  return head ? head.value : null;
}