const path = require('path');
const devMode= process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './frontend/app.js',
  output: {
    path: path.resolve(__dirname, 'backend/public'),
    filename: 'bundle.js',
  },
  mode: 'production',
};
