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
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(arr, n) {
    if (n === undefined) {
      n = 1;
    }
    let dropArr = arr.slice(n, arr.length);
    return dropArr;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });

    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  }
};

module.exports = _;
console.log(_pad('hi', 5));
