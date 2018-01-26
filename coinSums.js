var coinSums = function(total, coins) {
  var counter = 0;
  var coins = coins || [200, 100, 50, 20, 10, 5, 2, 1];

  var innerFunction = function(index, remainder) {
    if (remainder === 0) {
      counter++;
      return;
    } else if (remainder < 0 || index < 0) {
      return;
    }
  }
  while (remainder >= 0) {
    var coin = coins[index];
    innerFunction(index - 1, remainder);
    remainder -= coin;
  }
  innerFunction(coins.length - 1, total);
  return counter;
}