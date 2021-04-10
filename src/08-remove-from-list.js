function removeKFromList(l, k) {
  let result = l;
  let tmp = l;
  let prev = null;
  while (tmp) {
    if (tmp.value === k) {
      if (prev === null) {
        result = tmp.next;
      } else {
        prev.next = tmp.next;
        tmp = tmp.next;
      }
    }
    prev = tmp;
    tmp = tmp.next;
  }
  return result;
}

module.exports = removeKFromList;
