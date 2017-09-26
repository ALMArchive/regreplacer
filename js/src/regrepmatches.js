"use strict";

function validateType(type) {
   if(type === undefined) {
      return false;
   } else {
      if(type === "captures" || type === "matches") {
         return true;
      } else {
         return false;
      }
   }
}

function RegRepMatches(matchArr) {
   if(!Array.isArray(matchArr)) throw new Error("Must pass array to RegRepMatches.");

   this.getMatches = function getMatches() {
      return matchArr.map((elem) => elem[0]);
   }

   this.getCaptures = function getCaptures() {
      return matchArr.map((elem) => elem[1]);
   }

   this.getIndicies = function getIndicies() {
      return matchArr.map((elem) => elem.index);
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
}

module.exports = RegRepMatches;