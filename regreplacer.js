"use strict";

const RegRepMatches = require("./src/regrepmatches.js");

function validateRegex(reg) {
   if(reg === undefined) return false;
   return !(reg instanceof RegExp) ? false : true;
}

// Used for class identification
const RegReplacerSymbol = Symbol("RegReplacer");

class RegReplacer {
   constructor(regex) {
      if(!validateRegex(regex)) throw new Error("Must pass regex to RegReplacer");

      // Class Identifier
      this[RegReplacerSymbol] = RegReplacerSymbol;

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

      this.isClass = function(val) {
         return val[RegReplacerSymbol] === RegReplacerSymbol;
      }
   }
}

module.exports = RegReplacer;