const RegReplacer = require("../regreplacer.js");

const regRep  = new RegReplacer(/W(ord)/g);
const match   = regRep.match("Word Word Word");
console.log(match.captures);
