import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: 'lib/browser.cjs.js', format: 'cjs' },
      { file: 'lib/browser.esm.js', format: 'esm' },
    ],
    external: [/@babel\/runtime/, 'redux-saga/effects'],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        presets: [['@babel/preset-env', { loose: true }]],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      { file: 'lib/esnext.js', format: 'esm' },
      { file: 'lib/module.cjs.js', format: 'cjs' },
      { file: 'lib/module.esm.js', format: 'esm' },
    ],
    external: ['redux-saga/effects'],
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: [['@babel/preset-env', { targets: { node: '10' } }]],
      }),
    ],
  },
];
