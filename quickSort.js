var quickSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  var pivot = array[0];
  var left = [];
  var right = [];
  for (var i = 1; i < array.length; i++) {
    var el = array[i];
    el < pivot ? left.push(el) : right.push(el);
  }
  return quickSort(left).concat(pivot, quickSort(right));
 }
