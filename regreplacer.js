"use strict";

const RegRepMatches = require("./src/regrepmatches.js");

function validateRegex(reg) {
   if(reg === undefined) return false;
   return !(reg instanceof RegExp) ? false : true;
}

// Used for class identification
const RegReplacerSymbol = Symbol("RegReplacer");
const RegexSymbol       = Symbol("RegexSymbol");

class RegReplacer {
   constructor(regex) {
      if(!validateRegex(regex)) throw new Error("Must pass regex to RegReplacer");
      // Class Identifier
      this[RegReplacerSymbol] = RegReplacerSymbol;

      // put regex on a private variable
      this.RegexSymbol = regex;
   }

   match(str) {
      if(typeof str != "string") {
         throw new Error("Must pass string to setString.");
      }
      // Match the string on the regex
      let tmpMatch = this.RegexSymbol.exec(str);
      let matches = [];

      // While there are matches
      while(tmpMatch != null) {
         // Match Format: {0: "", 1: "", index: 0, input: ""}
         matches.push(tmpMatch);
         let lastIndex = tmpMatch.index;

         // Find next match
         tmpMatch = this.RegexSymbol.exec(str);

         // Make sure we aren't looping on the same match using lastIndex
         if(tmpMatch && (tmpMatch.index === lastIndex)) break;
      }
      return new RegRepMatches(matches);
   }

   isClass(other) {
      return other[RegReplacerSymbol] === this[RegReplacerSymbol];
   }
}

module.exports = RegReplacer;