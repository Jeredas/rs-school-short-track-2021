function getMatrixElementsSum(matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break;
      }
      result.push(matrix[j][i]);
    }
  }
  return result.reduce((a, b) => a + b, 0);
}

module.exports = getMatrixElementsSum;
