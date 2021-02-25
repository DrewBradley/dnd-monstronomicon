import { GET_MONSTERS_BY_CR } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  filter: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case GET_MONSTERS_BY_CR:
      return {...state, filter: action.payload}
    default:
      return state
  }
}