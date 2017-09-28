"use strict";

const chai = require('chai');
const RegReplacer = require('../regreplacer.js');

describe("RegReplacer", function() {
   describe("Construction", function() {
      it('Returned object should have RegReplacer Constructor', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(regRep.constructor.name === "RegReplacer").to.be.true;
      });
      it('should return throw error on an object', function() {
         chai.expect(() => new RegReplacer({})).to.throw(Error);
      });
      it('should return throw error on an array', function() {
         chai.expect(() => new RegReplacer([])).to.throw(Error);
      });
      it('should return throw error on a number', function() {
         chai.expect(() => new RegReplacer(1)).to.throw(Error);
      });
      it('should return throw error on a string', function() {
         chai.expect(() => new RegReplacer("")).to.throw(Error);
      });
      it('should return throw error on null', function() {
         chai.expect(() => new RegReplacer(null)).to.throw(Error);
      });
      it('should return throw error on undefined', function() {
         chai.expect(() => new RegReplacer(undefined)).to.throw(Error);
      });
   });
   describe("match Input errors", function() {
      it('error on no arguments', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(() => regRep.match()).to.throw(Error);
      });
      it('error on number', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(() => regRep.match(1)).to.throw(Error);
      });
      it('error on object', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(() => regRep.match({})).to.throw(Error);
      });
      it('error on array', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(() => regRep.match([])).to.throw(Error);
      });
      it('error on null', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(() => regRep.match(null)).to.throw(Error);
      });
      it('error on regex', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(() => regRep.match(/s/g)).to.throw(Error);
      });
   });
   describe("match Output", function() {
      it('match should return RegRepMatches on string input', function() {
         let regRep = new RegReplacer(/s/g);
         chai.expect(regRep.match("").constructor.name === "RegRepMatches").to.be.true;
      });
   });
});