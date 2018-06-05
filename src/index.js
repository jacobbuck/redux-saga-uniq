import { fork, take } from 'redux-saga/effects';

const takeUniqBy = (iteratee, patternOrChannel, saga, ...args) =>
  fork(function*() {
    while (true) {
      const action = yield take(patternOrChannel);
      // TODO
      yield fork(saga, [...args, action]);
    }
  });

const takeUniqWith = (predicate, patternOrChannel, saga, ...args) =>
  fork(function*() {
    while (true) {
      const action = yield take(patternOrChannel);
      // TODO
      yield fork(saga, [...args, action]);
    }
  });

export { takeUniqBy, takeUniqWith };
