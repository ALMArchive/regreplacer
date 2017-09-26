const RegReplace = require("./js/src/regreplace.js");

const regRepGen = new RegReplace();
const regRep    = regRepGen.regedReplacer(/\$(\S*)/g);
let   string    = "$v1 $v2 $v3";
let   matches   = regRep.match(string);
console.log(matches.replace(["This", "is", "cool."],"matches"));