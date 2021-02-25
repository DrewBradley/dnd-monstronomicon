import { FETCH_MONSTERS, FETCH_ONE_MONSTER, SEARCH_MONSTER_NAME } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  search: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MONSTERS:
      return {...state, monsters: action.payload}
    case FETCH_ONE_MONSTER:
      return {...state, monster: action.payload}
    // case SEARCH_MONSTER_NAME:
    //   return {...state, monsters: action.payload}
    default:
      return state
  }
}