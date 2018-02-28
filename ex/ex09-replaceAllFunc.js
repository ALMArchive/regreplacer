import RegReplacer from '../regreplacer';

let regRep  = new RegReplacer(/Word/g);
let match   = regRep.match("Word Word Word");
console.log(match.replaceAll(e => e.toLowerCase() + "@@", "matches"));
