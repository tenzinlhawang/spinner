//process.stdout.write('hello from spinner1.js... \rheyyy\n');

// create a variable with all characters for animation
// start a counter from 100 ( this is where '|' starts)
// lo0p through all the characters

const animation = '|/-\\|/-\\|' // made a variable with all characters
let counter = 100; // set the counter at 100;
for (let char of animation) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, counter += 300); 
};

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|    '); 
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r/   '); 
// }, 1100);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r-   '); 
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 1700);

