import { call, fork, take } from 'redux-saga/effects';

const takeUniqBy = (iteratee, ...rest) =>
  takeUniqWith((a, b) => Object.is(iteratee(a), iteratee(b)), ...rest);

const takeUniqWith = (comparator, patternOrChannel, saga, ...args) =>
  fork(function* () {
    const actions = new Set();
    while (true) {
      const action = yield take(patternOrChannel);
      if (![...actions].some((a) => comparator(a, action))) {
        yield fork(function* () {
          actions.add(action);
          yield call(saga, ...args, action);
          actions.delete(action);
        });
      }
    }
  });

export { takeUniqBy, takeUniqWith };
