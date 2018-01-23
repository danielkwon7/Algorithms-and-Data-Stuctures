var swap = function(index1, index2, array) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

//we can replace counter in the second for loop with i

var bubbleSort = function(array) {
  array = array.slice();
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1 - counter; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
      }
    }
    counter++;
  }
  return array;
}