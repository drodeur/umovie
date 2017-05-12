import { createStore, compose, applyMiddleware } from 'redux';

import promiseMiddleware from 'project-core/PromiseMiddleware';

const createHistory = __CLIENT__ ? require('history').createHistory : require('history/lib/createMemoryHistory');
const middlewares = [promiseMiddleware];

export default data => {
  const reducers = require('project-root/reducers').default;
  let store;

  if (__DEV__ && __CLIENT__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('project-core/DevTools.jsx').default;

    store = compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)(reducers, data);
  } else {
    store = compose(
      applyMiddleware(...middlewares)
    )(createStore)(reducers, data);
  }

  if (__DEV__ && module.hot) {
    module.hot.accept('project-root/reducers', () => {
      store.replaceReducer(require('project-root/reducers').default);
    });
  }

  return store;
};