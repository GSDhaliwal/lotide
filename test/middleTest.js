const assert = require('chai').assert; // 1
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [] when []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 3, 5]", () => {
    assert.deepEqual(middle([1, 3, 5]), []);
  });
  it("returns [] for [10, 4, 2, 7, 1, 7, 3, 20, 55]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55]), []);
  });
  it("returns [1, 7] for [10, 4, 2, 7, 1, 7, 3, 20, 55, ]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55]), [1, 7]);
  });
  it("returns [10] for [10, 4, 2, 7, 1, 7, 3, 20, 55, 100]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55]), [10]);
  });
  it("returns [1] for [10, 4, 2, 7, 1, 7, 3, 20, 55, 100]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55]), [1]);
  });
  it("returns [] for [10, 4, 2, 7, 1, 7, 3, 20, 55, 100]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100]), []);
  });
  it("returns [8] for [10, 4, 2, 7, 1, 7, 3, 20, 55, 100]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100]), [8]);
  });
  it("returns [7, 3] for [10, 4, 2, 7, 1, 7, 3, 20, 55, 100]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100]), [7, 3]);
  });
  it("returns [1, 7] for [10, 4, 2, 7, 1, 7, 3, 20, 55, 100]", () => {
    assert.deepEqual(middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100]), [1, 7]);
  });
});