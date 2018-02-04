var powerSet = function(string) {
  var set = [];
  var hash = {};
  string = string.split('').sort();

  var innerFunction = function(set) {
    var string = set.join('');
    if (hash[string]) {
      return;
    }
    hash[string] = true;
    set.push(string);
    if (set.length === 1) {
      return;
    }
    for (var i = 0; i < set.length; i++) {
      var subset = set.slice(0, i).concat(set.slice(i + 1));
      innerFunction(subset);
    }
  };
  innerFunction(string);
  set.unshift('');
  return set;
}