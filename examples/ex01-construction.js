const RegReplacer = require("../regreplacer.js");
const RegRepMatches = require("../src/RegRepMatches.js");

const regRep  = new RegReplacer(/\S+/g);
const regReg2 = new RegReplacer(new RegExp("/s/g"));