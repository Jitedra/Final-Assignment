// ------------------------------------
// Constants
// ------------------------------------
export const CLIENT_INVOICE = 'CLIENT_INVOICE';

// ------------------------------------
// Actions
// ------------------------------------
export const invoiceData = (values) => {
  return dispatch => {
    let array = [];
    array.push(values);
    localStorage.setItem('Invoice', JSON.stringify(array));
  }
}

export const actions = {

}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CLIENT_INVOICE]    : (state, action) => ({
    ...state,
    invoice: action.invoice
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  initialState: null
}

export default function invoiceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
