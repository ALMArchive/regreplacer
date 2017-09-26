function validateRegex(reg) {
   return !(reg instanceof RegExp || reg === undefined) ? false : true;
}

module.exports = validateRegex;