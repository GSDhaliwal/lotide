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

module.exports = middle;
