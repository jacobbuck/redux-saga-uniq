import { call, fork, take } from 'redux-saga/effects';

export const takeUniqBy = (iteratee, ...rest) =>
  takeUniqWith((a, b) => Object.is(iteratee(a), iteratee(b)), ...rest);

export const takeUniqWith = (comparator, patternOrChannel, saga, ...args) =>
  fork(function* () {
    let actions = [];
    while (true) {
      const action = yield take(patternOrChannel);
      if (!actions.some((a) => comparator(a, action))) {
        yield fork(function* () {
          actions = actions.concat([action]);
          yield call(saga, ...args.concat(action));
          actions = actions.filter((a) => a !== action);
        });
      }
    }
  });
