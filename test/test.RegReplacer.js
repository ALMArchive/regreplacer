"use strict";

const chai = require('chai');

import RegReplacer from '../regreplacer';

describe("RegReplacer", function() {
   describe("Construction", function() {
      it('Returned object should have RegReplacer Constructor', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(regRep.constructor.name === "RegReplacer").to.be.true;
      });
      it('should return throw error on bad input', function() {
         const vals = [{}, [], 1, "", null, undefined];
         vals.map(e => chai.expect(() => new RegReplacer(e)).to.throw(Error));
      });
   });
   describe("match Input errors", function() {
      it('error on no arguments', function() {
         let regRep = new RegReplacer(/s/g);
         const vals = [{}, [], 1, null, undefined, /s/g];
         vals.map(e => chai.expect(() => regRep.match(e)).to.throw(Error));
      });
   });
   describe("isClass", function() {
      it('test if two instances of regRep matches on isClass', function() {
         let regRep  = new RegReplacer(/s/g);
         let regRep2 = new RegReplacer(/s/g);
         chai.expect(regRep.isClass(regRep2)).to.be.true;
      });
      it('test if isClass matches on mismatched types', function() {
         let regRep  = new RegReplacer(/s/g);
         let map1 = new Map();;
         chai.expect(regRep.isClass(map1)).to.be.false;
      });
   });
   describe("match Output", function() {
      it('match should return RegRepMatches on string input', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(regRep.match("").constructor.name === "RegRepMatches").to.be.true;
      });
   });
});
