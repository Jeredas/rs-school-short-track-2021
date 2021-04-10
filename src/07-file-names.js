function renameFiles(names) {
  const list = {};
  const result = [];
  names.forEach((name) => {
    if (result.includes(name)) {
      list[name] = list[name] ? list[name] + 1 : 1;
      result.push(`${name}(${list[name]})`);
    } else {
      result.push(name);
    }
  });
  return (result);
}

module.exports = renameFiles;
