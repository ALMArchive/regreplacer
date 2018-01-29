import RegReplacer from '../regreplacer';

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word");
const match2  = regRep.match("Drow");
console.log(match.hasMatches);
console.log(match2.hasMatches);
