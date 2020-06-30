const without = function(source, itemsToRemove) {
  let itemsNotRemoved = [];
  let flag = false;
  for (let i = 0; i < source.length; i++) {
    flag = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      itemsNotRemoved.push(source[i]);
    }
  }
  return itemsNotRemoved;
};

//TEST
/*
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

assertArraysEqual([2, 3], (without([1, 2, 3], [1]))); //PASS
assertArraysEqual([1, 2, 3], (without([1, 2, 3], [1]))); //FAIL
assertArraysEqual(["1", "2"],(without(["1", "2", "3"], [1, 2, "3"]))); // PASS
assertArraysEqual(["1", "2", "3"], (without(["1", "2", "3"], [1, 2, "3"]))); // FAIL
assertArraysEqual(["hey", "hello", "how are you"], (without(["hey", "hello", "how are you"], [1, 2, 3 , 4, "hello"]))); //FAIL
assertArraysEqual(["hey", "hello", "how are you"], (without(["hey", "hello", "how are you"], [1, 2, 3 , 4])));//PASS
*/
module.exports = without;
