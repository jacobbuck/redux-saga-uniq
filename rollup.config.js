import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'lib/browser.js',
      format: 'cjs',
    },
    external: ['redux-saga/effects'],
    plugins: [babel()],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/module.js',
      format: 'cjs',
    },
    external: ['redux-saga/effects'],
  },
];
