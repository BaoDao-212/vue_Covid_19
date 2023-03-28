const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false, // không cần polyfill fs vì đang dùng cho môi trường web
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser")
      }
    },
  }
};
