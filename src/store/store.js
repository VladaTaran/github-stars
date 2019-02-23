import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import filtersReducer from '../reducers/filters';
import {usersList} from '../reducers/userDescription';

export default () => {
    const store = createStore(
        combineReducers({
            usersList: usersList,
            // userDescription: userDescriptionReducer
        }),
        applyMiddleware(ReduxThunk)
      );
    return store;
};