const flatten = function(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        finalArray.push(array[i][j]);
      }
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
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

assertArraysEqual([2, 3], flatten([1, 2, 3])); //FAIL
assertArraysEqual([1, 2, 3], flatten([1, [2, 3]])); //PASS
assertArraysEqual(["1", "2"], flatten([["1"], "2", "3"])); // FAIL
assertArraysEqual(["1", "2", "3"], flatten([["1"], "2", "3"])); // PASS
assertArraysEqual(["hey", "hello", "how are you"], flatten(["hey", ["hello"], ["how are you"]])); //pass
assertArraysEqual(["hey", "hello"], flatten([["hey", "hello"]]));//pass
