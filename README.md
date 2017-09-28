# RegReplacer
A library to facilitate **regex** matches and **replacing** matches.

```
const regRep     = new RegReplacer(/Word/g);
const str        = "Word Word Word";
const regMatches = regRep.match(str);
console.log(regMatches.replace(["This", "is", "RegReplacer."], "matches"));
```
*This is RegReplacer.*

## Installing
`npm install regreplacer`

## API

### RegReplacer
Main class, constructor takes a valid regex and returns a RegReplacer object.
Invalid regexs will throw an error on construction.

#### Construction
```
const RegReplacer = require("../regreplacer.js");

const regRep  = new RegReplacer(/\S+/g);
const regReg2 = new RegReplacer(new RegExp("/s/g"));
console.log(regRep.isClass(regReg2));
```
#### Methods

##### Match
Match function takes a word and returns a RegRepMatches Object.
```
const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word");
```

##### isClass
Used to determine class type equality. Implemented internally using symbols.
```
const regRep  = new RegReplacer(/Word/g);
const match   = regRep.match("Word");
const match2  = regRep.match("Word");
console.log(match.isClass(match2));
```