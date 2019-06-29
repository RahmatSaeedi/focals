// Sums 1 to n recursively
// jshint esversion : 6


const sumRecursively = function(n, sum = 0) {
  if (n > 0) {
    return sumRecursively(n - 1 , sum + n);
  } else {
    return sum;
  }
};



// Example
console.log(sumRecursively(4));