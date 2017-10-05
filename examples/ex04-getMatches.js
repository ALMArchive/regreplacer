const RegReplacer = require("../regreplacer.js");

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word Word Word");
console.log(match.matches);