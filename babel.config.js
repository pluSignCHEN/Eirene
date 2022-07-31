module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
      },
    ],
    "@babel/typescript",
  ],
  plugins: [
    [
      "@babel/transform-runtime",
      {
        corejs: 3,
        useESModules: true,
      },
    ],
  ],
};
