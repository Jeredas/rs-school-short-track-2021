function sortByHeight(arr) {
  let newArr = arr.filter((i) => i > 0);
  newArr = newArr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(newArr[i]);
      newArr.splice(0, 1);
    }
  }
}
module.exports = sortByHeight;
