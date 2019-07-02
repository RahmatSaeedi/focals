// interactive timer behavior:
//    * user can press `b` and it beeps right away
//    * user can press `1 to 9` and
//        * `console.logs` "setting timmer for {x} seconds..."
//        * beeps after `{x}` seconds passed
//    * `ctrl + c` logs "Thanks for using me", and terminates the program
// jshint esversion : 6

const stdin = process.stdin;
const stdout = process.stdout;
const exit = process.exit;
const log = console.log;

// Configurations
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {             // ring a bell
    stdout.write('\u0007');

  } else if (key > '0' && key <= '9') {   // set timer for future
    log(`setting timer for ${key} secconds... `);
    setTimeout(() => {
      stdout.write('\u0007');
    }, key * 1000);

  } else if (key === '\u0003') {  // ctrl+c: EXIT
    log('Thanks for using me');
    exit();
  }
});