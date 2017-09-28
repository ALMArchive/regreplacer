const RegReplace = require("../regreplace.js");

// Generate a RegReplace object tied to a specific regex
const regRep = new RegReplace(/\$(\S*)/g);

// Create a string to match on
let string = "$v1 $v2 $v3";

// Calling match function on string returns a RegRepMatches object
let regMatches = regRep.match(string);

// From the RegRepMatches object we can do several things
// First we can get the matches
let matches = regMatches.getMatches();
console.log(matches); // ['$v1', '$v2', '$v3']

// Next we can get the captures
let captures = regMatches.getCaptures();
console.log(captures); // ['v1', 'v2', 'v3']

// Finally we can get the indices of matches
let indices = regMatches.getIndices();
console.log(indices); // [0, 4, 8]

// After matching, we can replace the matches with an array of values
let newString1 = regMatches.replace(["This", "is", "cool."], "matches");
console.log(newString1);

newString2 = regMatches.replace([1, 2, 3], "matches");
console.log(newString2);

newString3 = regMatches.replace([{'a':1}, {'b':2}, {'c':3}], "captures");
console.log(newString3);