// ------------------------------------
// Constants
// ------------------------------------
export const CLIENT_REGISTRATION = 'CLIENT_REGISTRATION';

// ------------------------------------
// Actions
// ------------------------------------
export const clientRegistration = (values) => {
  return dispatch => {
    let array = [];
    array.push(values);
    localStorage.setItem('Details', JSON.stringify(array));
  }
}

export const actions = {
  clientRegistration
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CLIENT_REGISTRATION]: (state, action) => ({
    ...state,
    clientDetails : action.clientDetails
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  initialState: null
}
export default function clientsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
