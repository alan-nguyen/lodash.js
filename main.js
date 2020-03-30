const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(lower, number);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (length <= string.length) {
      return string;
    } else {
      let startPaddingLength = Math.floor((length - string.length) / 2);
      let endPaddingLength = length - startPaddingLength;
      let paddedString =
        ' ' * startPaddingLength + string + ' ' * endPaddingLength;
      return paddedString;
    }
  },
  has(object, key) {
    let hasValue = object[key] != undefined;
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject = { originalValue: key };
    }
    return invertedObject;
  }
};

module.exports = _;
console.log(_pad('hi', 5));
