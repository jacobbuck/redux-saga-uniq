import { call, fork, take } from 'redux-saga/effects';
import regeneratorRuntime from 'regenerator-runtime';

const takeUniqBy = (iteratee, patternOrChannel, saga, ...args) =>
  fork(function*() {
    const actions = [];
    while (true) {
      const action = yield take(patternOrChannel);
      if (!actions.some(a => iteratee(a) === iteratee(action))) {
        yield fork(function*() {
          actions.push(action);
          yield call(saga, ...args.concat(action));
          actions.splice(actions.indexOf(action), 1);
        });
      }
    }
  });

const takeUniqWith = (predicate, patternOrChannel, saga, ...args) =>
  fork(function*() {
    const actions = [];
    while (true) {
      const action = yield take(patternOrChannel);
      if (!actions.some(a => predicate(a, action))) {
        yield fork(function*() {
          actions.push(action);
          yield call(saga, ...args.concat(action));
          actions.splice(actions.indexOf(action), 1);
        });
      }
    }
  });

export { takeUniqBy, takeUniqWith };
