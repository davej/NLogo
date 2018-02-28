const logos = require('./logos');

const simpleLookup = pkgName => logos[pkgName];

const charLookup = (pkgName, char) => {
  const splitName = pkgName.split(char);
  const { length } = splitName.length;

  const matches = splitName
    .map((_, i) =>
      simpleLookup(`${splitName.slice(0, length - i).join(char) + char}*`)
    )
    .filter(x => !!x);

  // Return most exact match
  return matches ? matches[matches.length - 1] : null;
};

const advancedLookup = (pkgName, hasDot, hasDash, hasSlash) => {
  if (hasDot) {
    const result = charLookup(pkgName, '.');
    if (result) return result;
  }
  if (hasDash) {
    const result = charLookup(pkgName, '-');
    if (result) return result;
  }
  if (hasSlash) {
    const result = charLookup(pkgName, '/');
    if (result) return result;
  }
  return null;
};

function getLogo(pkgName) {
  if (!pkgName) return null;

  const simpleLookupResult = simpleLookup(pkgName);
  if (simpleLookupResult) return simpleLookupResult;

  const hasDot = !!pkgName.includes('.');
  const hasDash = !!pkgName.includes('-');
  const hasSlash = !!pkgName.includes('/');
  const requiresAdvancedLookup = hasDot || hasDash || hasSlash;
  return requiresAdvancedLookup
    ? advancedLookup(pkgName, hasDot, hasDash, hasSlash)
    : null;
}

module.exports.get = getLogo;
