
const maxProfit = (prices) => {
  /*
    Brute force: look at all permutations

    for each price p
      for each price q to p's right
        subtract p from q and update maxDifference as needed
    return maxDifference
  */
  let thisDifference = 0;
  let maxDifference = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      thisDifference = prices[j] - prices[i];
      if (thisDifference > maxDifference)
        maxDifference = thisDifference;
    }
  }
  return maxDifference;

};

module.exports = maxProfit;