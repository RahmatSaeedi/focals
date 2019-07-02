// based on the argv inputs, the timer `beeps` after a specified duration.
// Example
//  `node timer 7 8 12` would ring the system bell after 7, 8, and 12 seconds has passed
// jshint esversion : 6

process.argv.slice(2).forEach(e => {
  if (!isNaN(e) && e >= 0) {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, e * 1000);
  }
});