const withTM = require('next-transpile-modules')(['@bma98/fractal-ui', '@bma98/size-class']); // pass the modules you would like to see transpiled

module.exports = withTM();