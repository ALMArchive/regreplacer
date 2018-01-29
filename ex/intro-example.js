import RegReplacer from '../regreplacer';
const regRep     = new RegReplacer(/Word/g);
const str        = "Word Word Word";
const regMatches = regRep.match(str);
console.log(regMatches.replace(["This", "is", "RegReplacer."], "matches"));
