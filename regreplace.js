"use strict";

function RegReplace(reg) {
   let regEx;
   let matches = [];

   this.hasMatch = false;;

   function clear() {
      regEx = null;
      this.hasMatch = false;
      matches = [];
   }

   this.setReg = function setReg(reg) {
      if(!(reg instanceof RegExp || reg === undefined)) throw new Error("Must past regex to RegReplace");
      regEx = reg;
   }

   this.match = function match(str) {
      if(typeof str != "string") throw new Error("Must pass string to setString.");
      if(!regEx) throw new Error("Cannot match without valid regex, use setReg.");

      let match = reg.exec(str)
      if(match === null) {
         this.hasMatch = false;
         return false;
      }

      while(match != null) {
         matches.push(match);
         let lastIndex = match.index;
         match = reg.exec(str);
         if(match && (match.index === lastIndex)) break;
      }
      this.hasMatch = true;
      return true;
   }

   this.getMatches = function getMatches() {
      if(!this.hasMatch) throw new Error("Must match before calling getMatches.");
      return matches.map((elem) => elem[0]);
   }

   this.getCaptures = function getCaptures() {
      if(!this.hasMatch) throw new Error("Must match before calling getMatches.");
      return matches.map((elem) => elem[1]);
   }

   this.getIndicies = function getIndicies() {
      if(!this.hasMatch) throw new Error("Must match before calling getMatches.");
      return matches.map((elem) => elem.index);
   }

   this.replace = function replace(arr, type) {
      type = type || "matches";
      let matchArr;
      if(type === "matches") {
         matchArr = this.getMatches();
      } else if(type === "captures") {
         matchArr = this.getCaptures();
      } else {
         throw new Error("Only matches or captures can be passed for type to replace.");
      }

      if(!matches) throw new Error("You must match before calling replace.");
      if(!Array.isArray(arr)) throw new Error("Must pass array to replace.");
      if(arr.length != matches.length) throw new Error("Replacement array must have same number of entries as matches");
      let repString = matches[0].input;

      for(let i = 0; i < matches.length; i++) {
         repString = repString.replace(matchArr[i], arr[i]);
      }
      return repString;
   }

   this.setReg(reg);
}

module.exports = RegReplace;

// let reg    = new RegExp(/\$(\S*)/g); // both object and explicit form allowed.
// let regRep = new RegReplace(reg);
// let string = "$v1 $v2 $v3";
// regRep.match(string);
// console.log(string);
// console.log(regRep.getMatches());
// console.log(regRep.getCaptures());
// console.log(regRep.getIndicies());
// console.log(regRep.replace(["This", "is", "cool."]));
// console.log(regRep.replace(["This", "is", "cool."],"captures"));
