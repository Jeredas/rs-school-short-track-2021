function deleteDigit(n) {
  const str = String(n);
  const digits = [];
  for (let i = 0; i < str.length; i++) {
    const first = str.slice(0, i);
    const last = str.slice(i + 1);
    const digit = Number(first + last);
    digits.push(digit);
  }

  return Math.max.apply(null, digits);
}

module.exports = deleteDigit;
