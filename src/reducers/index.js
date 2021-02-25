import { combineReducers } from 'redux';
import monsterReducer from './Reducer'
import searchReducer from './SearchReducer'

const rootReducer = combineReducers({
  monsters: monsterReducer,
  search: searchReducer})

export default rootReducer;