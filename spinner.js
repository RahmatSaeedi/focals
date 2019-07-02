// animates a spinner on the console, (character |/-\|/-\| in that order), as though it is spinning
// jshint esversion : 6

const sentence = "|/-\\|/-\\|";
let i = 0;


const spinner = () => setTimeout(() => {
  process.stdout.write(`\r${sentence[i++]}    `);
  if (i < sentence.length) spinner();
  if (i === sentence.length) process.stdout.write('\n');
}, 200);


spinner();