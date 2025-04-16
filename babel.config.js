module.exports = function (api) {
  api.cache(false);
  return {
    presets: [
      'babel-preset-expo',
      ['module:metro-react-native-babel-preset', { loose: true }],
      "@babel/preset-react"
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], // Adjust root directory as needed
          alias: {
            '@': './src',  // Alias '@' to resolve to the 'src' folder
            '@assets': './assets',  // Alias for assets outside of src
          },
        },
      ],
    ],
  };
};