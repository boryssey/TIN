function toCoins(amount, coins) {
  var result = [];
  while (coins.length) {
    if (coins[0] <= amount) {
      amount -= coins[0];
      result = result.concat(coins[0]);
    }
    else {
      coins.shift();
    }
  }
  return result;
}
console.log("amount 46 can be converted to such coins " + toCoins(46, [25, 10, 5, 2, 1]));
