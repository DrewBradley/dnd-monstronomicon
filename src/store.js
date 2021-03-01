import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers'

const initialState = loadState() || {} 

const middleware = [thunk]

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware)
    ))

store.subscribe(() => {
  saveState({
    encounter: store.getState().encounter
  })
})

export default store