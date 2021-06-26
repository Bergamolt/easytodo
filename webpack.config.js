const path = require('path');

// module.exports = {
//   mode: 'development',
//   output: {
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: {
//       test: /\.(js|jsx)$/,
//       exclude: /(node_modules)/,
//       loader: 'babel-loader',
//       query: {
//         presets: [['latest', { modules: false }]],
//       },
//     },
//   },
// };

// const path = require('path');

module.exports = {
  mode: 'development',
  entry: './#src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'index.js',
  },
};
