const assert = require('assert').strict;
const maxProfit = require('../stockMarket');

describe("maxProfit",() => {
  it("should return 16 for [45, 24, 35, 31, 40, 38, 11]", () => {
    assert.equal(maxProfit([45, 24, 35, 31, 40, 38, 11]), 16);
  });

  it("should return 19 for [35, 24, 12, 11, 23, 30, 11]", () => {
    assert.equal(maxProfit([35, 24, 12, 11, 23, 30, 11]), 19);
  });

  it("should return 14 for [10, 24]", () => {
    assert.equal(maxProfit([10,24]), 14);
  });

  it("should return 0 for [10]", () => {
    assert.equal(maxProfit([10]), 0);
  });
});