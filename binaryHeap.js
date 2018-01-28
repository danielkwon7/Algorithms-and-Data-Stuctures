var BinaryHeap = function() {
  this._heap = [];
  this._compare = function(i, j) {
    return this._heap[i] < this._heap[j];
  }
}

BinaryHeap.prototype.length = function() {
  return this._heap.length;
}

BinaryHeap.prototype._getLesserChildIndex = function(parentIndex) {
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2]
  .filter((index) => {
    return index < this.length;
  });
  var length = childIndices.length;
  if (!length) {
    return;
  } else if (length === 1) {
    return childIndices[0];
  } else {
    var first = childIndices[0];
    var second = childIndices[1];
    if (this._compare(first, second)) {
      return first;
    } else {
      return second;
    }
  }
}

BinaryHeap.prototype._swap = function(index, parentIndex) {
  var temp = this._heap[index];
  this._heap[index] = this._heap[parentIndex];
  this._heap[parentIndex] = temp;
}

BinaryHeap.prototype.insert = function(node) {
  this._heap.push(node);
  var index = this.length - 1;
  var parentIndex = Math.floor((index - 1) / 2);
  while (index > 0 && (this._compare(index, parentIndex))) {
    this._swap(index, parentIndex);
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

BinaryHeap.prototype.removeRoot = function() {
  this._swap(this.length - 1, 0);
  var originalRoot = this._heap.pop();
  var temporaryRootIndex = 0;
  var lesserChildIndex = this._getLesserChildIndex(temporaryRootIndex);
  while (lesserChildIndex && this._compare(lesserChildIndex, temporaryRootIndex)) {
    this._swap(lesserChildIndex, temporaryRootIndex);
    temporaryRootIndex = lesserChildIndex;
    lesserChildIndex = this._getLesserChildren(temporaryRootIndex);
  }
  return originalRoot;
}