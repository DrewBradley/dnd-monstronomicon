import { combineReducers } from 'redux';
import monsterReducer from './Reducer'
import searchReducer from './SearchReducer'
import filterReducer from './FilterReducer'

const rootReducer = combineReducers({
  monsters: monsterReducer,
  search: searchReducer,
  filter: filterReducer
})

export default rootReducer;