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




const array = ["😎", "💩", "🤗", "😼", "😂"];
printNestedArrays(array);