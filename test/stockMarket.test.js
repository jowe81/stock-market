const assert = require('assert').strict;
const maxProfit = require('../stockMarket');

describe("maxProfit",() => {
  it("should return 16 for [45, 24, 35, 31, 40, 38, 11]", () => {
    assert.equal(maxProfit([45, 24, 35, 31, 40, 38, 11]), 16);
  });
});