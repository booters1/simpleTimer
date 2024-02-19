/*
Challenge
----------------
Instruction
----------------
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

/ https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

Will be using setTimeout to schedule the timer use cb to produce windows beep
*/
process.stdout.write('\x07');

//check for edge cases, time is not valid number, less than or equal to 0, and ignoring negative/non numbers
function setTimer(time) { 
  if (typeof time !== 'number' || time <= 0) return;
    setTimeout(function() {
      process.stdout.write('\x07'); 
    }, time * 1000);
};



// Schedule alarms with predefined time values (in seconds)
setTimer(3); // Beep after 3 seconds
setTimer(5); // Beep after 5 seconds
setTimer(9); // Beep after 9 seconds
setTimer(10); // Beep after 10 seconds
setTimer(15); // Beep after 15 seconds