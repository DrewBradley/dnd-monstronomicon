/* eslint-disable import/no-anonymous-default-export */
import { SEARCH_MONSTER_NAME, GET_MONSTERS_BY_CR } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  returned: [],
  encounter: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SEARCH_MONSTER_NAME:
      return {...state, returned: action.payload}
    case GET_MONSTERS_BY_CR:
      return {...state, returned: action.payload}
    default:
      return state
  }
}