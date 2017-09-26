"use strict";

const chai = require('chai');
const validateRegex = require('../src/validateregex.js');

describe("validateRegex", function() {
   describe("true", function() {
      it('should return true on a regex literal', function() {
         chai.expect(validateRegex(/s/g)).to.be.true;
      });
      it('should return true on a regex object', function() {
         chai.expect(validateRegex(new RegExp(/s/g))).to.be.true;
      });
   });
   describe("false", function() {
      it('should return false on an object', function() {
         chai.expect(validateRegex({})).to.be.false;
      });
      it('should return false on an array', function() {
         chai.expect(validateRegex([])).to.be.false;
      });
      it('should return false on a number', function() {
         chai.expect(validateRegex(1)).to.be.false;
      });
      it('should return false on a string', function() {
         chai.expect(validateRegex("")).to.be.false;
      });
      it('should return false on null', function() {
         chai.expect(validateRegex(null)).to.be.false;
      });
      it('should return false on undefined', function() {
         chai.expect(validateRegex(undefined)).to.be.false;
      });
   });
});