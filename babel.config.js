module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/core': './src/core',
          '@/screens': './src/screens',
        },
      },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
