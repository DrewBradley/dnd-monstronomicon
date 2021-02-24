import { combineReducers } from 'redux';
import monsterReducer from './Reducer'
import searchReducer from './SearchReducer'

export default combineReducers({monsters: monsterReducer,
  search: searchReducer})