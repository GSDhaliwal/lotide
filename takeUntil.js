const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => should PASS
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);// PASS
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2]); // => should FAIL
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ","]);// FAIL
*/
module.exports = takeUntil;