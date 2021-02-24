import { SEARCH_MONSTER_NAME } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case SEARCH_MONSTER_NAME:
      console.log("IN THE REDUCER")
      return {...state, monsters: action.payload}
    default:
      return state
  }
}