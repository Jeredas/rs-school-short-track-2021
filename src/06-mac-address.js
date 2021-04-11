function isMAC48Address(n) {
  /* Reg exp find matches if string includes 2 symbols
  *from 0 to 9 or /and
  *from A to F. "g" is global for all string;
  *and write the result as array
  *than join them to string with '-' separator. */
  const result = n.match(/[0-9A-F]{2}/g).join('-');
  return result === n;
}

module.exports = isMAC48Address;
