import { FETCH_MONSTERS, FETCH_ONE_MONSTER, FILL_CR_LIST } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  CRNumbers: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MONSTERS:
      return {...state, monsters: action.payload}
    case FETCH_ONE_MONSTER:
      return {...state, monster: action.payload}
    case FILL_CR_LIST:
      return {...state, CRList: action.payload}
    default:
      return state
  }
}