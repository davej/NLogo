const { get } = require('nlogo');
const { join } = require('path');

function getLocalLogo(pkgName) {
  const logo = get(pkgName);
  if (!(logo && logo.filename)) return logo;
  return Object.assign(logo, {
    path: join(__dirname, logo.filename)
  });
}

module.exports = {
  get: getLocalLogo
};
