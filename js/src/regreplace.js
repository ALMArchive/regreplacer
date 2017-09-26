"use strict";

const RegedReplacer = require("./regedreplacer.js")
const validateRegex = require("./validateregex.js");

function RegReplace() {
   this.regedReplacer = function regedReplacer(regex) {
      if(!validateRegex(regex)) throw new Error("Must pass regex to regedReplacer");
      return new RegedReplacer(regex);
   }
}

module.exports = RegReplace;