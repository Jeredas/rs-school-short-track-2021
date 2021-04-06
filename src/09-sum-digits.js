function getSumOfDigits(n) {
  let result = n;
  while (result >= 10) {
    result = result.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
  }
  return result;
}

module.exports = getSumOfDigits;
