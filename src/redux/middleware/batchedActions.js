export const BATCH = 'BATCHING_REDUCER.BATCH';

export function batchActions(actions, type = BATCH) {
  return { type, meta: { batch: true }, payload: actions };
}

export function enableBatching(reduce) {
  return function batchingReducer(state, action) {
    if (action && action.meta && action.meta.batch) {
      return action.payload.reduce(batchingReducer, state);
    }
    return reduce(state, action);
  };
}

export function batchDispatchMiddleware(store) {
  function dispatchChildActions(store, action) { // eslint-disable-line no-shadow
    if (action.meta && action.meta.batch) {
      action.payload.forEach(childAction => {
        dispatchChildActions(store, childAction);
      });
    } else {
      store.dispatch(action);
    }
  }

  return next => action => {
    if (action && action.meta && action.meta.batch) {
      dispatchChildActions(store, action);
    }
    return next(action);
  };
}
