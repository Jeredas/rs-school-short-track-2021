function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split('');
  const array2 = s2.split('');
  let count = 0;
  //  Cheks if element of array 1 in array 2, and saves it's position.
  for (let i = 0; i < array1.length; i++) {
    const position = array2.indexOf(array1[i]);
    if (position >= 0) {
      count += 1;
      //  If position > 0, removes element from array 2.
      array2.splice(position, 1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
