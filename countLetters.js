const countLetters = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let sentence1 = countLetters("this is starting to make more sense");

assertEqual(sentence1["a"], 2);
assertEqual(sentence1["i"], 3);
assertEqual(sentence1["s"], 2);
assertEqual(sentence1["t"], 4);

module.exports = countLetters;