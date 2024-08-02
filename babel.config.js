module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@icons": "./src/assets/icons",
          "@images": "./src/assets/images",
          "@components": "./src/components",
          "@pages": "./src/pages",

        },
      },
    ],
  ],
};
