
var evenOccurrence = function(arr) {
  var hash = {};
  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    hash[number] = hash[number] + 1 || 1;
  }
  for (var number in hash) {
    if (hash[number] % 2 === 0) {
      return Number(number);
    }
  }
  return null;
}

var dan = [1, 2, 1, 3, 4, 5, 6, 7, 7, 1];
console.log(evenOccurrence(dan) === 7 ? 'PASS' : 'GG');
