
//check for edge cases 
function setTimers(times) {
  times.forEach(time => {
     //time is valid number,greater than 0
    if (typeof time === 'number' && time > 0) {
      // scheduled beep
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  });
}


// using command line arugments (excludes first two lines)
const args = process.argv.slice(2).map(Number);

// calling setTimers() with user input
setTimers(args);