const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//TEST
/*
const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log("✅✅ Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else if (eqArrays(actual, expected) === false) {
    console.log("❌❌ Assertion Failed: [" + actual + "] === [" + expected + "]");
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["human", "food", "is", "not", "for", "animals"];
const words3 = ["I", "am", "running", "out", "of", "things", "to", "say"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
const results4 = map(words3, word => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => should PASS
assertArraysEqual(results2, ["h", "f", "i", "n", "f", "a"]);// FAIL
assertArraysEqual(results3, ["I", "a", "r", "o", "o", "t", "t", "s"]);
assertArraysEqual(results4, ["g", "c", "t", "m", "t"]);
*/
module.exports = map;