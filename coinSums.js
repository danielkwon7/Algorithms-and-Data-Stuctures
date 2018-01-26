var coinSums = function(total, coins) {
  var counter = 0;
  var coins = coins.sort() || [1, 2, 5, 10, 20, 50, 100, 200];

  var innerFunction = function(index, remainder) {
    var coin = coins[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      innerFunction(index - 1, remainder);
      remainder -= coin;
    }
  }
  innerFunction(coins.length - 1, total);
  return counter;
}