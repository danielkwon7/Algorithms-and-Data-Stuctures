var powerSet = function(string) {
  var set = [];
  var hash = {};
  string = string.split('').sort();

  var innerFunction = function(stringSet) {
    var string = stringSet.join('');
    if (hash[string]) {
      return;
    }
    hash[string] = true;
    set.push(string);
    if (stringSet.length === 1) {
      return;
    }
    for (var i = 0; i < stringSet.length; i++) {
      var subset = stringSet.slice(0, i).concat(stringSet.slice(i + 1));
      innerFunction(subset);
    }
  };
  innerFunction(string);
  set.unshift('');
  return set;
}