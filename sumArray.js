// Prints the content of a nested array.
// jshint esversion : 6

const sumArray = function(array) {
  let sum = 0;
  array.forEach(element => {
    if (element instanceof Array) {
      sum += sumArray(element);
    } else {
      sum += element;
    }
  });
  return sum;
};




const myArray = [[1, 2, [[3], 4]], 5, []];
console.log(sumArray(myArray));