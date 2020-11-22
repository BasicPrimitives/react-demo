const NOTIFICATIONS_CHANGE = 'redux-example/notificationsReducer/NOTIFICATIONS_CHANGE';

const mapping = {
  [NOTIFICATIONS_CHANGE]: (state, action) => {
    const newState = {
      ...state,
      ...action.payload,
    };
    return newState;
  },
};

export default function notificationsReducer(state = {}, action) {
  let newState = { ...state };

  if (mapping[action.type]) {
    newState = mapping[action.type](state, action);
  }

  return newState;
}
