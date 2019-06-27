// Takes a single parameter (a number) from the command line and rolls that many six-sided dice.
// jshint esversion : 6
const rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
};


process.argv.slice(2).forEach(e => {
  if (!isNaN(Number(e))) {
    let out = `Rolled ${Number(e)} dice: `;
    e = Number(e);
    while (e > 0) {
      out += `${rollDice()}, `;
      e--;
    }
    out = out.slice(0, -2);
    console.log(out);
  }
});