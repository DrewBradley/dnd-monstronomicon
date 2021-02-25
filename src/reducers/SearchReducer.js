import { SEARCH_MONSTER_NAME } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  search: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case SEARCH_MONSTER_NAME:
      return {...state, search: action.payload}
    default:
      return state
  }
}