"use strict";

function validateType(type) {
   if(type === "captures" || type === "matches") {
      return true;
   } else {
      return false;
   }
}

// Used for class identification
const RegRepMatchesSymbol = Symbol("RegRepMatches");
const MatchArSymbol       = Symbol("MatchArSymbol");

class RegRepMatches {
   constructor(matchArr) {
      if(!Array.isArray(matchArr)) throw new Error("Must pass array to RegRepMatches.");

      // Class Identifier
      this[RegRepMatchesSymbol] = RegRepMatchesSymbol;

      // Put match array on a private variable
      this.MatchArSymbol = matchArr;
   }

   getMatches() {
      return this.MatchArSymbol.map((elem) => elem[0]);
   }

   getCaptures() {
      return this.MatchArSymbol.map((elem) => elem[1]);
   }

   getIndices() {
      return this.MatchArSymbol.map((elem) => elem.index);
   }

   hasMatches() {
      return !!this.MatchArSymbol[0];
   }

   replace(repArr, type) {
      if(!Array.isArray(repArr)) throw new Error("Must pass array to replace.");
      if(!validateType(type)) throw new Error("Must pass either captures or matches to replace");

      let tmpArr;
      if(type === "matches") {
        tmpArr = this.getMatches();
      } else if(type === "captures") {
        tmpArr = this.getCaptures();
      }

      // Grab original input off a match
      let repString = this.MatchArSymbol[0].input;

      // Replace each match using the passed in array.
      // Stops replacing after matches.length
      for(let i = 0; i < this.MatchArSymbol.length; i++) {
         repString = repString.replace(tmpArr[i], repArr[i]);
      }

      return repString;
   }

   isClass(other) {
      return this[RegRepMatchesSymbol] === other[RegRepMatchesSymbol];
   }
}

module.exports = RegRepMatches;
