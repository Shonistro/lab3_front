const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode:'development',
    // ...
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: './src/pages/assets/images', to: 'images' }
        ]
      })
    ]
  };