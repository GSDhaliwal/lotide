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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL