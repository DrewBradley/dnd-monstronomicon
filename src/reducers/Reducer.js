import { FETCH_MONSTERS, FETCH_ONE_MONSTER } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  returned: [],
  encounter: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MONSTERS:
      return {...state, monsters: action.payload}
    case FETCH_ONE_MONSTER:
      return {...state, monster: action.payload}
    default:
      return state
  }
}