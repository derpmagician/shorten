const path = require('path');

module.exports = {
  entry: '',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'production',
};
