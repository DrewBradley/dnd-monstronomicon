import { combineReducers } from 'redux';
import EncounterReducer from './EncounterReducer';
import monsterReducer from './Reducer'
import searchReducer from './SearchReducer'

const rootReducer = combineReducers({
  monsters: monsterReducer,
  returned: searchReducer,
  encounter: EncounterReducer
})

export default rootReducer;