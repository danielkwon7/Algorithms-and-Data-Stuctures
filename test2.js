var Node = function(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.addNext = function(value) {
  var node = new Node(value);
  this.next = node;
  return node;
}

var sortLinkedList = function(linkedList) {
  var head = linkedList;
  if (!linkedList.next) {
    return linkedList;
  }
  var length = 0;
  while (head) {
    length++;
    head = head.next;
  }
  head = linkedList;
  var left = linkedList;
  var half = Math.floor(length / 2);
  for (var i = 0; i < half; i++) {
    var temp = head.next;
    if (i === half - 1) {
      head.next = null;
    }
    head = temp;
  }
  return merge(sortLinkedList(left), sortLinkedList(head));
}

var merge = function(linkedList1, linkedList2) {
  var resultHead = null;
  var resultCurrent = null;
  while (linkedList1 && linkedList2) {
    var lowerHead = linkedList1.value > linkedList2.value ? linkedList2 : linkedList1;
    if (!resultHead) {
      resultHead = lowerHead;
    } else {
      resultCurrent.next = lowerHead;
    }
    resultCurrent = lowerHead;
    if (linkedList1.value > linkedList2.value) {
      linkedList2 = linkedList2.next;
    } else {
      linkedList1 = linkedList1.next;
    }
  }
  if (linkedList1) {
    resultCurrent.next = linkedList1;
  } else {
    resultCurrent.next = linkedList2;
  }
  return resultHead;
}

var head1 = new Node(5);
head1.addNext(3).addNext(2).addNext(4).addNext(1);
console.log(sortLinkedList(head1).value);



