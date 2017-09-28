const RegReplacer = require("../regreplacer.js");

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word Word Word");
console.log(match.replace(["This", "is", "cool"], "matches"));

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word Word Word");
console.log(match.replace([1,2], "matches"));

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word Word Word");
console.log(match.replace([1,2,3,4], "matches"));

const regRep  = new RegReplacer(/W(ord)/g);
const match   = regRep.match("Word Word Word");
console.log(match.replace(["This", "is", "cool"], "captures"));
