function validateType(type) {
  if (type === 'captures' || type === 'matches') {
    return true;
  }
  return false;
}

// Used for class identification
const CLASS_SYMBOL = Symbol('RegRepMatches Symbol');

export default class RegRepMatches {
  constructor(matches) {
    if (!Array.isArray(matches)) throw new Error('Must pass array to RegRepMatches.');

    // Class Identifier
    this[CLASS_SYMBOL] = { CLASS_SYMBOL, matches };
  }

  get matches() {
    return this[CLASS_SYMBOL].matches.map(elem => elem[0]);
  }

  get captures() {
    return this[CLASS_SYMBOL].matches.map(elem => elem[1]);
  }

  get indices() {
    return this[CLASS_SYMBOL].matches.map(elem => elem.index);
  }

  get hasMatches() {
    return !!this[CLASS_SYMBOL].matches[0];
  }

  replace(repArr, type) {
    if (!Array.isArray(repArr)) throw new Error('Must pass array to replace.');
    if (!validateType(type)) throw new Error('Must pass either captures or matches to replace');

    let tmpArr;
    if (type === 'matches') {
      tmpArr = this.matches;
    } else if (type === 'captures') {
      tmpArr = this.captures;
    }

    // Grab original input off a match
    let repString = this[CLASS_SYMBOL].matches[0].input;

    // Replace each match using the passed in array.
    repString = tmpArr.reduce((a, c, i) => a.replace(c, repArr[i]), repString);


    return repString;
  }

  replaceAll(rep, type) {
    if (Array.isArray(rep)) this.replace(rep);
    if ((typeof rep !== 'string') && (typeof rep !== 'function')) {
      throw new Error('Must pass string or function to replaceAll.');
    }
    if (!validateType(type)) throw new Error('Must pass either captures or matches to replace');

    let tmpArr;
    if (type === 'matches') {
      tmpArr = this.matches;
    } else if (type === 'captures') {
      tmpArr = this.captures;
    }

    // Grab original input off a match
    let repString = this[CLASS_SYMBOL].matches[0].input;

    // Replace each match using the passed in array.
    repString = tmpArr.reduce((a, c) => a.replace(c, rep), repString);

    return repString;
  }

  isClass(other) {
    if (!other[CLASS_SYMBOL]) return false;
    if (!other[CLASS_SYMBOL].CLASS_SYMBOL) return false;
    if (!this[CLASS_SYMBOL].CLASS_SYMBOL) return false;
    return this[CLASS_SYMBOL].CLASS_SYMBOL === other[CLASS_SYMBOL].CLASS_SYMBOL;
  }
}
