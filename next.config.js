// @ts-check
const path = require('path');
const webpack = require('webpack');
const exportPathMap = require('./exportPathMap');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap,
  reactStrictMode: true,
  webpack: (config, options) => {
    // .babelrc
    // https://spectrum.chat/next-js/general/add-node-path-src-to-nextjs~5fa6f531-d24f-4953-aa08-5f07ab0dfec9?m=MTU1NzcyNDA2MTQyMA==
    // https://github.com/zeit/next.js/issues/946#issuecomment-302944617
    // Webpack
    // https://www.reddit.com/r/reactjs/comments/a9s9yz/is_there_a_way_to_import_your_own/ecm0cmn/
    // jsconfig.json
    // https://stackoverflow.com/a/39414291
    // https://create-react-app.dev/docs/importing-a-component/#absolute-imports
    // Next.js
    // https://github.com/zeit/next.js/pull/2909
    config.resolve.alias = {
      ...config.resolve.alias,
      public: path.resolve(__dirname, 'public/'),
      static: path.resolve(__dirname, 'public/static/'),
    };
    return config;
  },
};
