# RegReplacerr
A library to facilitate **regex** matches and **replacing** matches.

`const regRep     = new RegReplacer(/Word/g);
const str        = "Word Word Word";
const regMatches = regRep.match(str);
console.log(regMatches.replace(["This", "is", "RegReplacer."], "matches"));`

*This is RegReplacer.*

## Installing
`npm install regreplacer`