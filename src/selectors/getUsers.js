import { getUsersSuccess, getUsersDescription, getUsersFailure } from '../actions/users';
import { getStars } from './getStars';

export function getUsers(url) {
    return async dispatch => {
        const response = await fetch(url);
        const usersList = await response.json();
            if(usersList) {
                dispatch(getUsersSuccess(usersList.items));
                const usersListItems = usersList.items;
                const allUsersDescription = await usersListItems.map(async userItem => {
                    const fetchingStars = await fetch(`https://api.github.com/users/${userItem.login}?scope=user:email`)
                    if (fetchingStars.ok === false) { dispatch(getUsersFailure())};
                    const usersWithStars = await fetchingStars.json();
                    const stars = await getStars(userItem);
                    usersWithStars.stars = stars;
                    return usersWithStars;
                });
                return Promise.all(allUsersDescription)
                       .then(results=>dispatch(getUsersDescription(results)))
                       .catch(e => dispatch(getUsersFailure(e)))
            } else {
                dispatch(getUsersFailure());
            } 
        }        
}