const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

let sentence1 = countLetters("This is starting to make more sense.");
console.log(sentence1);


assertEqual(sentence1["a"], 2);
assertEqual(sentence1["i"], 3);
assertEqual(sentence1["s"], 2);
assertEqual(sentence1["t"], 4);
assertEqual(sentence1["T"], 1);
