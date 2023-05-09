/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const withVideos = require('next-videos');

const path = require('path');

// loaders: [
//   {
//     test: /\.html$/,
//     loader: 'html-loader?attrs[]=video:src',
//   },
//   {
//     test: /\.mp4$/,
//     loader: 'url?limit=10000&mimetype=video/mp4',
//   },
// ];

// module.exports = {
//   future: {
//     webpack5: true,
//   },
//   webpack: function (config, options) {
//     console.log(options.webpack.version);
//     config.experiments = {};
//     return config;
//   },
// };

module.exports = {
  module: {
    rules: [
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};

module.exports = withVideos(nextConfig);
