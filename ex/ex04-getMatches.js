import RegReplacer from '../regreplacer';

const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word Word Word");
console.log(match.matches);
