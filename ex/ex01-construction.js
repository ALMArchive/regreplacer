const RegReplacer = require("../regreplacer.js");

const regRep  = new RegReplacer(/\S+/g);
const regReg2 = new RegReplacer(new RegExp("/s/g"));
console.log(regRep.isClass(regReg2));
