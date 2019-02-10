import 'regenerator-runtime/runtime';
import { call, fork, take } from 'redux-saga/effects';

const takeUniqBy = (iteratee, patternOrChannel, saga, ...args) =>
  fork(function*() {
    let actions = [];
    while (true) {
      const action = yield take(patternOrChannel);
      if (!actions.some(a => iteratee(a) === iteratee(action))) {
        yield fork(function*() {
          actions = actions.concat([action]);
          yield call(saga, ...args.concat(action));
          actions = actions.filter(a => a !== action);
        });
      }
    }
  });

const takeUniqWith = (comparator, patternOrChannel, saga, ...args) =>
  fork(function*() {
    let actions = [];
    while (true) {
      const action = yield take(patternOrChannel);
      if (!actions.some(a => comparator(a, action))) {
        yield fork(function*() {
          actions = actions.concat([action]);
          yield call(saga, ...args.concat(action));
          actions = actions.filter(a => a !== action);
        });
      }
    }
  });

export { takeUniqBy, takeUniqWith };
