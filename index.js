// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

//   Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined


function superbowlWin(array) {
    // assigning variable "win" to array.find then using an arrow function that says find the object with the result of "W"
    const win = array.find(object => object.result === "W");
    //returns win year if it exists (or, is true) and returns undefined otherwise
    return win ? win.year : undefined;
  }

superbowlWin(record);
console.log(superbowlWin(record));