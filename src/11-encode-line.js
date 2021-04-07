function encodeLine(str) {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      result += count + str[i];
      count = 1;
    }
  }

  return result.split('').filter((elem) => elem !== '1').join('');
}

module.exports = encodeLine;
