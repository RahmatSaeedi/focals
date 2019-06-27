// Joins a string array, using fforEach method
// jshint esversion: 6
const concepts = function(data) {
  if (data.length === 0) { // Case of empty array
    return "";
  } else {
    let out = "";
    data.forEach(e => {
      out += `${e}, `;
    });
    out = out.slice(0, -2); // remove last 2 characters, ", " from the end
    return out;
  }
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(`Today I learned about ${concepts(conceptList)}.`);