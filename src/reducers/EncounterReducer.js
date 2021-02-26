import { ADD_TO_ENCOUNTER } from '../actions/types'

const initialState = { 
  monsters: [],
  monster: {},
  returned: [],
  encounter: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    console.log('made it to encounter reducer')
    action.payload = 'aboleth maybe'
    switch(action.type) {
    case ADD_TO_ENCOUNTER:
      return {...state, encounter: action.payload}
    default:
      return state
  }
}