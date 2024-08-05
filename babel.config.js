module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@icons": "./src/assets/icons",
          "@images": "./src/assets/images",
          "@components": "./src/components",
          "@pages": "./src/pages",
          "@styles": "./src/styles",
          "@libs": "./src/libs",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
