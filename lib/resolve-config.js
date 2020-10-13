const {isNil, castArray} = require('lodash');

module.exports = ({assets, message, publishPush}) => ({
  assets: isNil(assets)
    ? ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
    : assets
    ? castArray(assets)
    : assets,
  message,
  publishPush: isNil(publishPush) ? false : publishPush,
});
