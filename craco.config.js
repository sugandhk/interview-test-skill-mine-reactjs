const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@services': path.resolve(__dirname, 'src/services'),
    }
  }
};