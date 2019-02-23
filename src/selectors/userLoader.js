import { loadUsers, successLoaded, rejectLoading } from '../actions/filters';

export function userLoader() {
    return dispatch => {
        dispatch(loadUsers());
        return fetch('https://api.github.com/search/users?q=location:kyiv&page=1&per_page=10&sort:follovers')
            .then(handleError)
            .then(res => res.json())
            .then(json => {
                dispatch(successLoaded(json.items));
                // console.log(json.items)
                return json.items;
            })
            .catch(error => dispatch(rejectLoading(error)));
    };
}

// export function userLoader() {
//     return dispatch => {
//         dispatch(successLoaded());
//         return fetch('https://api.github.com/search/users?q=location:kyiv&page=1&per_page=10&sort:follovers')
//             .then(handleError)
//             .then(res => res.json())
//             .then(json => json.items)
//             .catch(error => dispatch(rejectLoading(error)));
//     };
// }

export function handleError(response) {
    if(!response) {
        throw new Error(response.statusText);
    }
    return response;
}