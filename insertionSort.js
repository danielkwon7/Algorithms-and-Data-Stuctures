var insertionSort = function(array) {
  array = array.slice();
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    for (var j = i - 1; j >= 0; j--) {
      var el = array[j];
      if (temp > el) {
        array[j + 1] = temp;
        break;
      } else {
        array[j + 1] = el;
      }
    }
  }
  return array;
}