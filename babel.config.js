module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/components': './src/components',
          '@/config': './src/config',
          '@/features': './src/features',
          '@/navigation': './src/navigation',
        },
      },
    ],
    'nativewind/babel',
    'react-native-reanimated/plugin',
  ],
};
