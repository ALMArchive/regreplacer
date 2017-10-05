"use strict";

const chai = require('chai');
const RegRepMatches = require('../src/regrepmatches.js');

let reg = new RegExp(/\$(\S*)/g);
let str = "$v1 $v2 $v3";
let match = reg.exec(str);
let matches = [];
while(match != null) {
   matches.push(match);
   let lastIndex = match.index;
   match = reg.exec(str);
   if(match && (match.index === lastIndex)) break;
}
let regMatch;

describe("RegRepMatches", function() {
   describe("Construction", function() {
      it('Returned object should have RegRepMatches Constructor', function() {
         regMatch = new RegRepMatches(matches);
         chai.expect(regMatch.constructor.name === "RegRepMatches").to.be.true;
      });
      it('Should throw error on object.', function() {
         chai.expect(() => { new RegRepMatches() }).to.throw(Error);
      });
      it('Should throw error on number.', function() {
         chai.expect(() => { new RegRepMatches(1) }).to.throw(Error);
      });
      it('Should throw error on string.', function() {
         chai.expect(() => { new RegRepMatches("") }).to.throw(Error);
      });
      it('Should throw error on empty', function() {
         chai.expect(() => { new RegRepMatches() }).to.throw(Error);
      });
      it('Should throw error on null.', function() {
         chai.expect(() => { new RegRepMatches(null) }).to.throw(Error);
      });
   });
   describe("Empty Gets", function() {
      it('getMatches should be 0 on empty matches', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(regMatch.getMatches().length).to.equal(0);
      });
      it('getCaptures should be 0 on empty matches', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(regMatch.getCaptures().length).to.equal(0);
      });
      it('getIndices should be 0 on empty matches', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(regMatch.getIndices().length).to.equal(0);
      });
      it('hasMatches should return false on empty matches', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(regMatch.hasMatches()).to.be.false;
      });
      it('hasMatches should return true on non-empty matches', function() {
         regMatch = new RegRepMatches([["asd"],["asd"],[0]]);
         chai.expect(regMatch.hasMatches()).to.be.true;
      });
      it('Error when empty array and matches', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace([], "matches")).to.throw(Error);
      });
      it('Error when empty array and captures', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace([], "captures")).to.throw(Error);
      });
   });
   describe("String Replace Input", function() {
      it('error on no arguments', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace()).to.throw(Error);
      });
      it('error if first argument is object', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace({})).to.throw(Error);
      });
      it('error if first argument is string', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace("")).to.throw(Error);
      });
      it('error if first argument is number', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace(1)).to.throw(Error);
      });
      it('error if first argument is null', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace(null)).to.throw(Error);
      });
      it('error if first argument is array and second is object', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace([], {})).to.throw(Error);
      });
      it('error if first argument is array and second is array', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace([], [])).to.throw(Error);
      });
      it('error if first argument is array and second is number', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace([], 1)).to.throw(Error);
      });
      it('error if first argument is array and second is string', function() {
         regMatch = new RegRepMatches([]);
         chai.expect(() => regMatch.replace([], "")).to.throw(Error);
      });
      it('', function() {
         regMatch = new RegRepMatches([{0: "", 1: "", index: 0, input: ""}]);
         chai.expect(regMatch.replace([""], "captures")).to.equal("");
      });
      it('Should return empty string for blank array and captures', function() {
         regMatch = new RegRepMatches([{0: "", 1: "", index: 0, input: ""}]);
         chai.expect(regMatch.replace([""], "captures")).to.equal("");
      });
      it('Should return empty string for blank array and matches', function() {
         regMatch = new RegRepMatches([{0: "", 1: "", index: 0, input: ""}]);
         chai.expect(regMatch.replace([""], "matches")).to.equal("");
      });
   });
   describe("isClass", function() {
      it('test if two instances of regRep matches on isClass', function() {
         let regMatch  = new RegRepMatches([]);
         let regMatch2 = new RegRepMatches([]);
         chai.expect(regMatch.isClass(regMatch2)).to.be.true;
      });
      it('test if isClass matches on mismatched types', function() {
         let regMatch  = new RegRepMatches([]);
         let map1 = new Map();;
         chai.expect(regMatch.isClass(map1)).to.be.false;
      });
   });
   describe("String Replace Outputs", function() {
      it('$v1 $v2 $v3 string replace should be This is cool on matches', function() {
         regMatch = new RegRepMatches(matches);
         chai.expect(regMatch.replace(["This", "is", "cool"], "matches")).to.equal("This is cool");
      });
      it('$v1 $v2 $v3 string replace should be This is cool on captures', function() {
         regMatch = new RegRepMatches(matches);
         chai.expect(regMatch.replace(["This", "is", "cool"], "captures")).to.equal("$This $is $cool");
      });
   });
});