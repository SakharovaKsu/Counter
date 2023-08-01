import {initialState, reducerCounter} from './reducerCounter';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
    counter: reducerCounter
})

const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store;