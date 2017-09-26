const RegReplace = require("../regreplace.js");

const regRep = new RegReplace(/\$(\S*)/g);
let   string    = "$v1 $v2 $v3";
let   matches   = regRep.match(string);
console.log(matches.replace(["This", "is", "cool."],"matches"));