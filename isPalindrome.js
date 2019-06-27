// Checks if a string or sentence a palindrome
// jshint esversion : 6


// Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed`);
  } else {
    console.log(`🛑  Assertion Failed`);
  }
};



const isPalindrome = function(str) {
  const noSpaces = str.split(" ").join("");
  const midIndex = Math.floor(noSpaces.length / 2);
  const lastIndex = noSpaces.length - 1;

  for (let i = 0; i < midIndex; i++) {
    if (noSpaces[i].toLowerCase() !== noSpaces[lastIndex - i].toLowerCase())
      return false;
  }
  return true;
};


process.argv.slice(2).forEach(e => {
  console.log(isPalindrome(e));
});



// TEST CODE
// These should all pass assertion.
console.log("\n\n Test codes: These should all pass assertion");
assertEqual(isPalindrome('p'), true);
assertEqual(isPalindrome('foo'), false);
assertEqual(isPalindrome('racecar'), true);
assertEqual(isPalindrome('live without evil'), false);
assertEqual(isPalindrome('just some random words'), false);
assertEqual(isPalindrome('Kayak'), true);
assertEqual(isPalindrome('a santa at NASA'), true);