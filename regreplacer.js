"use strict";

const RegRepMatches = require("./src/regrepmatches.js");

function validateRegex(reg) {
   if(reg === undefined) return false;
   return !(reg instanceof RegExp) ? false : true;
}

class RegReplacer {
   constructor(regex) {
      if(!validateRegex(regex)) throw new Error("Must pass regex to RegReplacer");

      this.match = function match(str) {
         if(typeof str != "string") {
            throw new Error("Must pass string to setString.");
         }
         let tmpMatch = regex.exec(str);
         let matches = [];

         while(tmpMatch != null) {
            matches.push(tmpMatch);
            let lastIndex = match.index;
            tmpMatch = regex.exec(str);
            if(tmpMatch && (tmpMatch.index === lastIndex)) break;
         }
         return new RegRepMatches(matches);
      }
   }
}

module.exports = RegReplacer;