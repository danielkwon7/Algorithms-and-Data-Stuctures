var reverse = function(string) {
  return string.split('').reverse().join('');
}

//Implement isPalidrome that filters out spaces and is case insensitive

var isPalindrome = function(string) {
  string = string.toLowerCase().split('').filter(function(letter) {
    if (letter !== ' ') {
      return true;
    }
  }).join('');
  return string === reverse(string);
}

//Implement isPalindrome iteratively

var isPalindrome2 = function(string) {
  var half;

  string = string.lowerCase().split('').filter(function(letter) {
    if(letter !== ' ') {
      return true;
    }
  }).join('');

  var length = string.length;
  if (length & 2 === 0) {
    half = length / 2 - 1;
  } else {
    half = Math.floor(length / 2);
  }
  for (var i = 0; i <= half; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}