
var calculate = function(el1, el2, operator) {
  if (operator === '/') {
    return el1 / el2;
  }
  if (operator === '+') {
    return el1 + el2;
  }
  if (operator === '-') {
    return el1 - el2;
  }
  if (operator === '*') {
    return el1 * el2;
  }
}


var reversePolish = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (typeof el === 'number') {
      result.push(el);
    } else {
      var second = result.pop();
      var first = result.pop();
      result.push(calculate(first, second, el));
    }
  }
  return result[0];
}

var example = [2, 1, 12, 3, '/', '-', '+'];
console.log(reversePolish(example) === -1);