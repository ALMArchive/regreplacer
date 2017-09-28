const RegReplacer = require("../regreplacer.js");

// Generate a RegReplacer object tied to a specific regex
const regRep = new RegReplacer(/\$(\S*)/g);

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
console.log(newString1); // This is cool

newString2 = regMatches.replace([1, 2, 3], "matches");
console.log(newString2); // 1 2 3

// Or we can replace the captures
let newString3 = regMatches.replace(["This", "is", "cool."], "captures");
console.log(newString3); // $This $is $cool

newString4 = regMatches.replace([1, 2, 3], "captures");
console.log(newString4); // $1 $2 $3

// Replacements can be done programmtically
let capMap = {'v1':'This', 'v2':'is', 'v3':'cool'};
let reaAr = [];

for(const match of captures) {
   reaAr.push(capMap[match]);
}

let newString5 = regMatches.replace(reaAr, "matches");
console.log(newString5); // This is cool
