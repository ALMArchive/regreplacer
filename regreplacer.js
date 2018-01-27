import RegRepMatches from './src/regrepmatches';

function validateRegex(reg) {
  if (reg === undefined) return false;
  return reg instanceof RegExp;
}

// Used for class identification
const CLASS_SYMBOL = Symbol('RegReplacer');

export default class RegReplacer {
  constructor(regex) {
    if (!validateRegex(regex)) throw new Error('Must pass regex to RegReplacer');
    // Class Identifier
    this[CLASS_SYMBOL] = { CLASS_SYMBOL, regex };
  }

  match(str) {
    if (typeof str !== 'string') {
      throw new Error('Must pass string to setString.');
    }
    // Match the string on the regex
    let tmpMatch = this[CLASS_SYMBOL].regex.exec(str);
    const matches = [];

    // While there are matches
    while (tmpMatch != null) {
      // Match Format: {0: '', 1: '', index: 0, input: ''}
      matches.push(tmpMatch);
      const lastIndex = tmpMatch.index;

      // Find next match
      tmpMatch = this[CLASS_SYMBOL].regex.exec(str);

      // Make sure we aren't looping on the same match using lastIndex
      if (tmpMatch && (tmpMatch.index === lastIndex)) break;
    }
    return new RegRepMatches(matches);
  }

  isClass(other) {
    if (!other[CLASS_SYMBOL]) return false;
    if (!other[CLASS_SYMBOL].CLASS_SYMBOL) return false;
    if (!this[CLASS_SYMBOL].CLASS_SYMBOL) return false;
    return this[CLASS_SYMBOL].CLASS_SYMBOL === other[CLASS_SYMBOL].CLASS_SYMBOL;
  }
}
