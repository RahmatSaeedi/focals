// animates the sentence, revealing one character at a time, as though it is being typed in by someone
// jshint esversion : 6

const sentence = "Hello there from the other side of the monitor";
let i = 0;


const typewritter = () => setTimeout(() => {
  process.stdout.write(sentence[i++]);
  if (i < sentence.length) typewritter();
  if (i === sentence.length) process.stdout.write('\n');
}, 50);

typewritter();