import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: 'lib/browser.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'lib/browser.esm.js', format: 'esm', sourcemap: true },
    ],
    external: [/@babel\/runtime/, 'redux-saga/effects'],
    plugins: [
      babel({
        babelHelpers: 'runtime',
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      { file: 'lib/module.cjs.js', format: 'cjs', sourcemap: true },
      { file: 'lib/module.esm.js', format: 'esm', sourcemap: true },
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
