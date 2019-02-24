import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import {usersReducer} from '../reducers/usersReducer';

export default () => {
    const store = createStore(
        combineReducers({
            users: usersReducer,
        }),
        applyMiddleware(ReduxThunk)
      );
    return store;
};
   