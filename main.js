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
  }
};
