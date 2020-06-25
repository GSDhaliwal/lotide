const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const eqObjects = function(object1, object2) {
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) { //compare length of keys in both objects
    return false;
  }
  for (let object in object1) {
    if (object1.hasOwnProperty(object)) {
      if (!Array.isArray(object1[object])) { //check if current key is not an array
        if (object1[object] !== object2[object]) {
          return false;
        }
      } else if ((eqArrays(object1[object], object2[object])) === false) { //if current key is an array
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);