const nlogo = require('nlogo');
const { join } = require('path');

module.exports.get = function getLocalLogo(pkgName) {
  const logo = nlogo.get(pkgName);
  if (!(logo && logo.filename)) return logo;
  return Object.assign(logo, {
    path: join(__dirname, logo.filename)
  });
};
