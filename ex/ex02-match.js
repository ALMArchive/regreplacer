import RegReplacer from '../regreplacer';

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word");
const match2  = regRep.match("Word");
console.log(match.isClass(match2));
