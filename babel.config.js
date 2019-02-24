module.exports = {
  presets: [
    [
      // https://babeljs.io/docs/en/babel-preset-env
      '@babel/preset-env',
      {
        // https://babeljs.io/docs/en/babel-preset-env#targets
        targets: {
          'node': '8.0.0'
        },
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        useBuiltIns: 'usage'
      }
    ]
  ]
}
