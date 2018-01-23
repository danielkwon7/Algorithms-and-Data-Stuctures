var mergeSort = function(array) {
  if (array.length < 2) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid, array.length);
  return merge(mergeSort(left), mergeSort(right));
}

var merge = function(array1, array2) {
  var result = [];
  while (array1.length && array2.length) {
    array1[0] < array2[0] ? result.push(array1.shift()) : result.push(array2.shift());
  }
  return result.concat(array1, array2);
}

