// Prints the content of a nested array.
// jshint esversion : 6

const printNestedArrays = function(array) {
  array.forEach(element => {
    if (element instanceof Array) {
      printNestedArrays(element);
    } else {
      console.log(element);
    }
  });
};




const myArray = [1, [[[[[2]]]]], 3, [4, 5, [6, [7]], 8, 9], 10];
printNestedArrays(myArray);