module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    [
      '@babel/preset-react',

      {
        runtime: 'automatic',
      },
    ],

    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    '@babel/plugin-transform-modules-commonjs',
  ],
};
