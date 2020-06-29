const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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