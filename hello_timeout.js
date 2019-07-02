// prints the content of the sentence-array, one element at a time, 1 second apart from each other
// jshint esversion : 6

const sentence = ['4311o', 'th3r3', 'w0r1d'];
let i = 0;

const f = () => setTimeout(() => {
  console.log(sentence[i++]);

  if (i < sentence.length) {
    f();
  }
}, 1000);

f();
