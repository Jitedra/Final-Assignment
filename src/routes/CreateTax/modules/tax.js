// ------------------------------------
// Constants
// ------------------------------------
export const TAX_VALUE = 'TAX_VALUE';

// ------------------------------------
// Actions
// ------------------------------------
export const taxValue = (values) => {
  return dispatch => {
    const data = JSON.parse(localStorage.getItem('Tax'));
    data.push(values);
    localStorage.setItem('Tax', JSON.stringify(data));
  }
}

export const actions = {
  taxValue
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [TAX_VALUE]: (state, action) => ({
      ...state,
      tax: action.tax
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  initialState: null
}
export default function taxReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
