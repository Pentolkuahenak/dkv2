const path = require('path');

module.exports = {
  entry: './assets/js/filter.js',
  output: {
    filename: 'filter-bundle.js',
    path: path.resolve(__dirname, './assets/dist'),
  },
  // Tambahkan konfigurasi modul, misalnya untuk menangani berkas CSS, gambar, dll.
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Tambahkan aturan untuk berkas gambar, font, dll.
    ],
  },
};
