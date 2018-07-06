# redux-saga-uniq

Saga helpers which spawns duplicate-free sagas.

## Usage

### `takeUniqBy(iteratee, pattern, saga, ...args)`

- `iteratee: Function` - invoked for each action to generate the criterion by which uniqueness is computed.

- `pattern: String | Array | Function` - for more information see docs for [`take(pattern)`](https://redux-saga.js.org/docs/api/#takepattern)

- `saga: Function` - a Generator function

- `args: Array<any>` - arguments to be passed to the started task. `takeUniqBy` will add the incoming action to the argument list (i.e. the action will be the last argument provided to `saga`)

### `takeUniqWith(predicate, pattern, saga, ...args)`

- `comparator: Function` - invoked to compare each action for uniqueness.

- `pattern: String | Array | Function` - for more information see docs for [`take(pattern)`](https://redux-saga.js.org/docs/api/#takepattern)

- `saga: Function` - a Generator function

- `args: Array<any>` - arguments to be passed to the started task. `takeUniqWith` will add the incoming action to the argument list (i.e. the action will be the last argument provided to `saga`)
