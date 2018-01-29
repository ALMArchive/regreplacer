import RegReplacer from '../regreplacer';

const regRep  = new RegReplacer(/W(ord)/g);
const match   = regRep.match("Word Word Word");
console.log(match.captures);
