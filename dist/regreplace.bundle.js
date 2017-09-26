/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const RegRepMatches = __webpack_require__(1);
const validateRegex = __webpack_require__(2);

function RegReplace(regex) {
   if(!validateRegex(regex)) throw new Error("Must pass regex to RegReplace");

   this.match = function match(str) {
      if(typeof str != "string") {
         throw new Error("Must pass string to setString.");
      }
      let tmpMatch = regex.exec(str);
      let matches = [];

      while(tmpMatch != null) {
         matches.push(tmpMatch);
         let lastIndex = match.index;
         tmpMatch = regex.exec(str);
         if(tmpMatch && (tmpMatch.index === lastIndex)) break;
      }
      return new RegRepMatches(matches);
   }
}

module.exports = RegReplace;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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

   this.getIndices = function getIndicies() {
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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function validateRegex(reg) {
   if(reg === undefined) return false;
   return !(reg instanceof RegExp) ? false : true;
}

module.exports = validateRegex;

/***/ })
/******/ ]);