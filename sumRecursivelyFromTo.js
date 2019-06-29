// Sums `fromN` to `toN` recursively. Includes the end points. Assumes integer inputes, with fromN smaller than toN.
// jshint esversion : 6


const sumRecursivelyFromTo = function(fromN, toN, sum = 0) {
  if (fromN <= toN) {
    return sumRecursivelyFromTo(fromN + 1, toN , sum + fromN);
  } else {
    return sum;
  }
};



// Example
console.log(sumRecursivelyFromTo(3, 7));