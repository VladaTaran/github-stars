import { getUsersSuccess, getUsersDescription, getUsersFailure } from '../actions/users';
import { getStars } from './getStars';

const client_id = '';
const client_secret = ''; 

export function getUsers(url) {
    return (dispatch)=>{
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(usersList => {
                if(usersList) {
                    dispatch(getUsersSuccess(usersList.items));
                    const usersListItems = usersList.items;
                    const allUsersDescription = usersListItems.map(async userItem => {
                        const fetchingStars = await fetch(`https://api.github.com/users/${userItem.login}?scope=user:email&client_id=${client_id}&client_secret=${client_secret}`)
                            .then(res => {
                                if(!res.ok) {
                                    throw new Error("Error to get api for " + userItem )
                                }
                                return res;
                            })
                            .then(res=>res.json())
                            .catch(e => console.log(e))
                        const stars =  await getStars(userItem);
                        fetchingStars.stars = stars;
                        return fetchingStars;
                    });
                    return Promise.all(allUsersDescription).then(results=>dispatch(getUsersDescription(results)))
                } 
            })
            .catch(e => dispatch(getUsersFailure(e)))
    }
}