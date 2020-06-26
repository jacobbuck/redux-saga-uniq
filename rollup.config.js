import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: 'lib/browser.cjs.js', format: 'cjs' },
      { file: 'lib/browser.esm.js', format: 'esm' },
    ],
    external: ['redux-saga/effects'],
    plugins: [
      babel({
        presets: [['@babel/preset-env', { loose: true }]],
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: [
      { file: 'lib/module.cjs.js', format: 'cjs' },
      { file: 'lib/module.esm.js', format: 'esm' },
    ],
    external: ['redux-saga/effects'],
    plugins: [
      babel({
        presets: [['@babel/preset-env', { targets: { node: '10' } }]],
      }),
    ],
  },
];
