import {
    ADD_CURRENCY
} from '../constants/actionTypes'

import initialState from '../initialState'

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CURRENCY:
    let currencies = [...state.currencies];
    currencies.push(action.payload.currency)
      return {
        ...state, currencies: currencies
      };
    default:
      return state
  }
}
