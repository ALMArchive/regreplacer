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

function RegRepMatches(matchArr) {
   if(!Array.isArray(matchArr)) throw new Error("Must pass array to RegRepMatches.");

   // Class Identifier
   this[RegRepMatchesSymbol] = RegRepMatchesSymbol;

   this.getMatches = function getMatches() {
      return matchArr.map((elem) => elem[0]);
   }

   this.getCaptures = function getCaptures() {
      return matchArr.map((elem) => elem[1]);
   }

   this.getIndices = function getIndicies() {
      return matchArr.map((elem) => elem.index);
   }

   this.hasMatches = function hasMatches() {
      return !!matchArr[0];
   }

   this.replace = function replace(repArr, type) {
      if(!Array.isArray(repArr)) throw new Error("Must pass array to replace.");
      if(!validateType(type)) throw new Error("Must pass either captures or matches to replace");

      let tmpArr;
      if(type === "matches") {
        tmpArr = this.getMatches();
      } else if(type === "captures") {
        tmpArr = this.getCaptures();
      }

      let repString = matchArr[0].input;

      for(let i = 0; i < matchArr.length; i++) {
         repString = repString.replace(tmpArr[i], repArr[i]);
      }

      return repString;
   }

   this.isClass = function(val) {
      return val[RegRepMatchesSymbol] === RegRepMatchesSymbol;
   }
}

module.exports = RegRepMatches;
