Array.prototype.isSubsetOf = function(arr) {
  var object = {};
  for (var i = 0; i < arr.length; i++) {
    object[arr[i]] = true;
  }
  for (var i = 0; i < this.length; i++) {
    if (object[this[i]] === undefined) {
      return false;
    }
  }
  return true;
}

var dan = [1,2,3,4,5];
var esther = [1,2,3,4,5,6,7];
var david = [1, 7];
var leo = [111];

console.log(dan.isSubsetOf(esther) === true ? 'PASS' : 'GG');
console.log(david.isSubsetOf(esther) === true ? 'PASS' : 'GG');
console.log(leo.isSubsetOf(dan) === true ? 'GG' : 'PASS');

