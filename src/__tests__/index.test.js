const { default: configureStore } = require('redux-mock-store');
const { default: createSagaMiddleware, delay } = require('redux-saga');
const { call, put } = require('redux-saga/effects');
const { takeUniqBy, takeUniqWith } = require('../');

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

describe('takeUniqBy', () => {
  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureStore([sagaMiddleware])();

  sagaMiddleware.run(function*() {
    yield takeUniqBy(a => Math.floor(a.payload), 'FOO', function*(action) {
      yield call(delay, 200);
      yield put({ type: 'BAR', payload: action.payload });
    });
  });

  test('takes the first unique action by iteratee', async () => {
    mockStore.dispatch({ type: 'FOO', payload: 1 });
    mockStore.dispatch({ type: 'FOO', payload: 1.5 });
    mockStore.dispatch({ type: 'FOO', payload: 2.5 });
    mockStore.dispatch({ type: 'FOO', payload: 2 });

    await timeout(200);

    expect(mockStore.getActions()).toEqual([
      { type: 'FOO', payload: 1 },
      { type: 'FOO', payload: 1.5 },
      { type: 'FOO', payload: 2.5 },
      { type: 'FOO', payload: 2 },
      { type: 'BAR', payload: 1 },
      { type: 'BAR', payload: 2.5 },
    ]);
  });
});

describe('takeUniqWith', () => {
  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureStore([sagaMiddleware])();

  sagaMiddleware.run(function*() {
    yield takeUniqWith(
      (a1, a2) => Math.floor(a1.payload) === Math.floor(a2.payload),
      'FOO',
      function*(action) {
        yield call(delay, 200);
        yield put({ type: 'BAR', payload: action.payload });
      }
    );
  });

  test('takes the first unique action by iteratee', async () => {
    mockStore.dispatch({ type: 'FOO', payload: 1 });
    mockStore.dispatch({ type: 'FOO', payload: 1.5 });
    mockStore.dispatch({ type: 'FOO', payload: 2.5 });
    mockStore.dispatch({ type: 'FOO', payload: 2 });

    await timeout(200);

    expect(mockStore.getActions()).toEqual([
      { type: 'FOO', payload: 1 },
      { type: 'FOO', payload: 1.5 },
      { type: 'FOO', payload: 2.5 },
      { type: 'FOO', payload: 2 },
      { type: 'BAR', payload: 1 },
      { type: 'BAR', payload: 2.5 },
    ]);
  });
});
