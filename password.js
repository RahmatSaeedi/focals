// NOT MEANT FOR ANY PASSOWRD MANAGEMENT.
// Takes a command line argument (a password) and obfuscates it by following a few rules.
// jshint esversion : 6
const obfuscate = function(data) {
  let out = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a') {
      out += '4';
    } else if (data[i] === 'e') {
      out += '3';
    } else if (data[i] === 'o') {
      out += '0';
    } else if (data[i] === 'l') {
      out += '1';
    } else {
      out += data[i];
    }
  }
  
  return out;
};

process.argv.slice(2).forEach(e => {
  console.log(obfuscate(e));
});