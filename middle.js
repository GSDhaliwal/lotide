const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2);
    return [array[middleIndex]];
  } else if (array.length % 2 === 0) {
    let middleIndex = array.length / 2;
    return [array[middleIndex - 1], array[middleIndex]];
  }
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log("✅✅ Assertion Passed: [" + actual + "] === [" + expected + "]");
  } else if (eqArrays(actual, expected) === false) {
    console.log("❌❌ Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }
};



assertArraysEqual([], middle([])); //PASS
assertArraysEqual([], middle([1, 2])); //PASS
assertArraysEqual([], middle([1])); //PASS
assertArraysEqual([], middle([1, 3, 5])); //FAIL
assertArraysEqual([], middle([10, 4, 2, 7, 1, 7, 3, 20, 55])); //FAIL
assertArraysEqual([1, 7], middle([10, 4, 2, 7, 1, 7, 3, 20, 55])); //FAIL
assertArraysEqual([10], middle([10, 4, 2, 7, 1, 7, 3, 20, 55])); //FAIL
assertArraysEqual([1], middle([10, 4, 2, 7, 1, 7, 3, 20, 55])); //PASS
assertArraysEqual([], middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100])); //FAIL
assertArraysEqual([8], middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100])); //FAIL
assertArraysEqual([7, 3], middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100])); //FAIL
assertArraysEqual([1, 7], middle([10, 4, 2, 7, 1, 7, 3, 20, 55, 100])); //PASS