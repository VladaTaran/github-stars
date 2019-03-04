import { getUsersSuccess, getUsersDescription, getUsersFailure } from '../actions/users';
import { getStars } from './getStars';

const client_id = 'Iv1.1cf914d9918fca4a';
const client_secret = 'bc5dfb983d859ccea024e35483bdebfd9ad64ce4'; 

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

////////////////////////

//TODO: delete all .then

// export function getUsers(url) {
//     return async dispatch => {
//         const response = await fetch(url);
//         const usersList = await response.json();
//             if(usersList) {
//                 dispatch(getUsersSuccess(usersList.items));
//                 const usersListItems = usersList.items;
//                 const allUsersDescription = await usersListItems.map(async userItem => {
//                     const fetchingStars = await fetch(`https://api.github.com/users/${userItem.login}?scope=user:email`)
//                     if (fetchingStars.ok === false) { dispatch(getUsersFailure())};
//                     const usersWithStars = await fetchingStars.json();
//                     const stars = await getStars(userItem);
//                     usersWithStars.stars = stars;
//                     return usersWithStars;
//                 });
//                 return Promise.all(allUsersDescription)
//                        .then(results=>dispatch(getUsersDescription(results)))
//                        .catch(e => dispatch(getUsersFailure(e)))
//             } else {
//                 dispatch(getUsersFailure());
//             } 
//         }        
// }