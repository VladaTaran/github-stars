import { loadingDescription, successLoadedDescription, rejectLoadingDescription } from '../actions/userDescription';
import { handleError } from './userLoader';

export function userDescriptionLoader (userUrl) {
    return dispatch => {
        dispatch(loadingDescription());
        return fetch(userUrl)
            .then(handleError)
            .then(res => res.json())
            .then(json => {
                dispatch(successLoadedDescription(json));
                // console.log(json);
                return json;
            })
            .catch(error => dispatch(rejectLoadingDescription(error)));
    };

}