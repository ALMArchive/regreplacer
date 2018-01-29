import RegReplacer from '../regreplacer';

let regRep  = new RegReplacer(/Word/g);
let match   = regRep.match("Word Word Word");
console.log(match.replace(["This", "is", "cool"], "matches"));

regRep  = new RegReplacer(/Word/g);
match   = regRep.match("Word Word Word");
console.log(match.replace([1,2], "matches"));

regRep  = new RegReplacer(/Word/g);
match   = regRep.match("Word Word Word");
console.log(match.replace([1,2,3,4], "matches"));

regRep  = new RegReplacer(/W(ord)/g);
match   = regRep.match("Word Word Word");
console.log(match.replace(["This", "is", "cool"], "captures"));
