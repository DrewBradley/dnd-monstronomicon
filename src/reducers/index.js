import { combineReducers } from 'redux';
import monsterReducer from './Reducer'

export default combineReducers({monsters: monsterReducer})