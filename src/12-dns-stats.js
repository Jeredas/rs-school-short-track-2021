function getDNSStats(domains) {
  const result = {};
  domains.forEach((domain) => {
    const domainNames = domain.split('.').reverse();
    let sum = '';
    domainNames.forEach((name) => {
      sum = `${sum}.${name}`;
      result[sum] = !result[sum] ? 1 : result[sum] + 1;
    });
  });
  return result;
}

module.exports = getDNSStats;
