const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  let mergedSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      mergedSentence += sentence[i + 1];
      i++;
    } else {
      mergedSentence += sentence[i];
    }
  } console.log(mergedSentence);
  for (let letter of mergedSentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

let sentence1 = countLetters("this is starting to make more sense");
console.log(sentence1);


assertEqual(sentence1["a"], 2);
assertEqual(sentence1["i"], 3);
assertEqual(sentence1["s"], 2);
assertEqual(sentence1["t"], 4);