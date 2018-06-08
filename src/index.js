import { apply, fork, take } from 'redux-saga/effects';

const takeUniqBy = (iteratee, patternOrChannel, saga, ...args) =>
  fork(function*() {
    let actions = [];
    while (true) {
      const action = yield take(patternOrChannel);
      if (!actions.some(a => iteratee(a) === iteratee(action))) {
        yield fork(function*() {
          actions = [...actions, action];
          yield apply(saga, [...args, action]);
          actions = actions.filter(a => a !== action);
        });
      }
    }
  });

const takeUniqWith = (predicate, patternOrChannel, saga, ...args) =>
  fork(function*() {
    let actions = [];
    while (true) {
      const action = yield take(patternOrChannel);
      if (!actions.some(a => iteratee(a, action))) {
        yield fork(function*() {
          actions = [...actions, action];
          yield apply(saga, [...args, action]);
          actions = actions.filter(a => a !== action);
        });
      }
    }
  });

export { takeUniqBy, takeUniqWith };
