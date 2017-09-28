const RegReplacer = require("../regreplacer.js");
const RegRepMatches = require("../src/RegRepMatches.js");

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word");
const match2  = regRep.match("Word");
console.log(match.isClass(match2));
