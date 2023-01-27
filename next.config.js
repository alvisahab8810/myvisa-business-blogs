module.exports = {
    webpack5: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.html$/,
        loader: 'html-loader',
      });
      return config
    },
};


// module.exports = {
//   reactStrictMode: true,
//   // webpack5: true,
//   // webpack: (config) => {
//   //   config.resolve.fallback = { 
//   //     fs      : false, 
//   //     stream  : false,
//   //     path    : false,
//   //     crypto  : false
//   //   };

//   //   return config;
//   // },
// }
