"use strict";

const RegRepMatches = require("./regrepmatches.js");
const validateRegex = require("./validateregex.js");

function RegedReplacer(regex) {
   if(!validateRegex(regex)) throw new Error("Must pass regex to regedReplacer");

   this.match = function match(str) {
      if(typeof str != "string") throw new Error("Must pass string to setString.");
      let match = regex.exec(str)
      let matches = [];

      while(match != null) {
         matches.push(match);
         let lastIndex = match.index;
         match = regex.exec(str);
         if(match && (match.index === lastIndex)) break;
      }

      return new RegRepMatches(matches);
   }
}

module.exports = RegedReplacer;