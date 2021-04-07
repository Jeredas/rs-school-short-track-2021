function findIndex(array, value) {
  let min = 0;
  let max = array.length - 1;
  let middle = Math.floor((max + min) / 2);
  let index = array[middle];

  while (max >= min) {
    middle = max + min;
    index = array[middle];
    if (index === value) {
      return middle;
    }
    if (index < value) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  /**
   * требовал_вернуть_что-нибудь_в_конце_функции_findIndex
   * */
  return 'required to return value at the end of function';
}
module.exports = findIndex;
