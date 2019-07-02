// on any input from stdin (standard input), output a "." to stdout
// on `ctrl + c` input, the program terminates
// jshint esversion : 6

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {   // `Ctrl + c` termintaes the program
    process.exit();
  } else {
    process.stdout.write(key);
  }
});


