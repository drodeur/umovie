export default ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const { type, promise, payload } = action;

  if (!promise) {
    return next(action);
  }

  next({ type: type + '_REQUEST', payload });

  return promise.then(
    data => next({ type: type + '_SUCCESS', payload: { ...payload, data } }),
    error => next({ type: type + '_FAILURE', payload: { ...payload, error } })
  ).catch(e => { console.error(e.stack); });
};