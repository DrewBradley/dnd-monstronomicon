/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_ENCOUNTER, REMOVE_FROM_ENCOUNTER } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  returned: [],
  encounter: []
}

export default function(state = initialState, action) {
    switch(action.type) {
    case ADD_TO_ENCOUNTER:
      return {...state, encounter: action.payload}
    case REMOVE_FROM_ENCOUNTER:
      return {...state, encounter: action.payload}
    default:
      return state
  }
}