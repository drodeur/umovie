import { combineReducers } from 'redux';

const reducers = {};

{
  const context = require.context('project-root', true, /reducers\/(.*)\.jsx?$/);
  context.keys().forEach(path => { Object.assign(reducers, context(path).default); });
}

export default combineReducers(reducers);