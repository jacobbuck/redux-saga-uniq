# Changelog

## v1.6.0 - 2021-05-22

### Added

- Added source maps to build output.

### Changed

- Bumped up version of [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) to v7.14.0.
- Reduced browser bundle size by using [`Array.from`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of Babel helper for array spread operator.
- Replaced esnext build with node ES Module build.

## v1.5.2 - 2020-08-15

### Added

- Set `"sideEffects": false` in [package.json](./package.json).

## v1.5.1 - 2020-08-15

### Changed

- Bumped up version of [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) to v7.11.2.

## v1.5.0 - 2020-08-15

### Added

- Added esnext build for modern browsers.

### Changed

- Refactored internals to cache actions with `Set`.

## v1.4.0 - 2020-07-10

### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency for Babel helpers.

### Removed

- Removed requirement for [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) to me imported by consumer.

## v1.3.0 - 2020-06-26

### Added

- Added `engines` property in [package.json](./package.json).
- Added ES Module builds for both node and browsers.

### Changed

- Updated `takeUniqBy` comparison to use [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) to support comparing `+0`, `-0` and `NaN`.

## v1.2.0 - 2020-04-27

## v1.1.2 - 2019-06-02

## v1.1.1 - 2019-06-02

### Changed

- Update `main` property in [package.json](./package.json).

## v1.1.0 - 2019-02-24

### Added

- Added documentation about requiring [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) for browser support.

### Changed

- Builds are now done with [Rollup](http://rollupjs.org).
- Refactored `takeUniqBy` function to use `takeUniqWith` under the hood.
- Updated [redux-saga](https://www.npmjs.com/package/redux-saga) peerDependency to support v1.

### Removed

- Removed [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) dependency.

## v1.0.1 - 2019-02-10

### Changed

- Changed [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) import to global definition.

## v1.0.0 - 2018-07-07

Initial public version! :tada:
