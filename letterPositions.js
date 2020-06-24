const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅ Assertion Passed: arrays match`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`❌❌ Assertion Failed: arrays do not match`);
  }
};

assertArraysEqual(letterPositions("hel lo").e, [1]);
assertArraysEqual(letterPositions("hel lo").h, [0]);
assertArraysEqual(letterPositions("hel lo").l, [2, 4]);
assertArraysEqual(letterPositions("hel lo").o, [7]);
