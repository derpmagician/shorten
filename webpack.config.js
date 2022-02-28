const path = require('path');

module.exports = {
  entry: './frontend/js/app.js',
  output: {
    path: path.resolve(__dirname, 'backend/public'),
    filename: 'bundle.js',
  },
  mode: 'production',
};
