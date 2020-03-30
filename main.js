const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(lower, number);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  }
};
