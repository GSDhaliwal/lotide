# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gsdhaliwal/lotide`

**Require it:**

`const _ = require('@gsdhaliwal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: Prints success/failure messages to the console when checking primitive types, to let us know if function is behaving as expected.
* `head(...)`: Retrieves first element of an array.
* `tail(...)`: Retrieves all elements except for the first.
* `eqArrays(...)`: Compares two arrays to see if they are identical.
* `assertArraysEqual(...)`: Prints success/failure messages to the console when checking arrays, to let us know if function is behaving as expected.
* `without(...)`: Filters out unwanted data.
* `flatten(...)`: Will flatten array inside of an array into a single array.
* `middle(...)`: Retrieves the middle element(s) of an array.
* `countOnly(...)`: Will count the number of occurences in an array based on what we require.
* `countLetters(...)`: Takes in a string, and returns a count of the letters in the string.
* `letterPosition(...)`: Takes in a string, and returns an object with the position of each letter (zero-based positions).
* `findKeyByValue(...)`: Searches for a key of an object where the keys value matches the value from a callback.
* `eqObjects(...)`: Compares two arrays, to see if they have the same keys:values. 
* `assertObjectsEqual(...)`: Prints success/failure messages to the console when checking objects, to let us know if function is behaving as expected.
* `map(...)`: Takes in two parameters (array, callback function), and returns new array based on arguments.
* `takeUntil(...)`: Takes in two parameters (array, callback function). Returns all elements in array, until callback function returns a truthy value.
* `findKey(...)`: Takes in two parameters (object, callback function), loops through the object and returns first key where the callback returns true.