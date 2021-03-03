import { combineReducers } from 'redux';
import EncounterReducer from './EncounterReducer';
import MonsterReducer from './Reducer'
import SearchReducer from './SearchReducer'

const rootReducer = combineReducers({
  monsters: MonsterReducer,
  returned: SearchReducer,
  encounter: EncounterReducer
})

export default rootReducer;