export function getUsersSuccess(usersList) {
    return {
        type: 'USERS_LIST_DATA_SUCCESS',
        usersList
    }
};

export function getUsersDescription(usersDesc) {
    return {
        type: 'USERS_DESCRIPTION_SUCCESS',
        usersDesc
    }
};

export function getUsersStars(usersStars) {
    return {
        type: 'USERS_STARS_SUCCESS',
        usersStars
    }
};

const client_id = '';
const client_secret = '';

function getStars(userItem) {
    return fetch(`https://api.github.com/users/${userItem.login}/starred`)
    .then(res => {
        if(!res.ok) {
            throw new Error("Error to get starred api for " + userItem)
        }
        return res;
    })
    .then(res => res.json())
    .then(usersRepo => {
        return usersRepo.map(repo=>repo.stargazers_count).reduce((a,b) => a+b, 0)
    })
    .catch(e => console.log(e))
};
//

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

                    // const newArr = usersListItems.map(userItem => 
                    //     fetch(`https://api.github.com/users/${userItem.login}?scope=user:email&client_id=${client_id}&client_secret=${client_secret}`)
                    //         .then(res => {
                    //             if(!res.ok) {
                    //                 throw new Error("Error to get api for " + userItem )
                    //             }
                    //             return res;
                    //         })
                    //         .then(res=>res.json())
                    //         .then(usersDescription => {
                    //             return usersDescription;
                    //         })  
                    //         .catch(e => console.log(e))
                    //     );
                    // return Promise.all(newArr).then(results=>dispatch(getUsersDescription(results)))

                    const allUsersDescription = usersListItems.map(async userItem => {
                        const fetching = await fetch(`https://api.github.com/users/${userItem.login}?scope=user:email&client_id=${client_id}&client_secret=${client_secret}`)
                            .then(res => {
                                if(!res.ok) {
                                    throw new Error("Error to get api for " + userItem )
                                }
                                return res;
                            })
                            .then(res=>res.json())
                            .then( usersDescription => {
                                

                                return usersDescription;
                            })
                            .catch(e => console.log(e))
                        const stars =  await getStars(userItem);
                            fetching.stars = stars;
                        console.log('Find here users stars ', stars)
                        console.log('fitching is ',fetching)
                            return fetching;
                    }
                        
                    );

                    // const usersStars = usersListItems.map(userItem =>
                    //     fetch(`https://api.github.com/users/${userItem.login}/starred`)
                    //         .then(res => {
                    //             if(!res.ok) {
                    //                 throw new Error("Error to get starred api for " + userItem)
                    //             }
                    //             return res;
                    //         })
                    //         .then(res => res.json())
                    //         .then(usersRepo => {
                    //             return usersRepo.map(repo=>repo.stargazers_count).reduce((a,b) => a+b, 0)
                    //         })
                    //         .catch(e => console.log(e))
                    // );
                    // const resultDescription = Promise.all(allUsersDescription)
                    //     .then( users => {
                    //         users.map( user => {
                    //             let stars =  getStars(user);
                    //             console.log('Find here users stars ', stars)
                    //         })
                    //         console.log(users)
                    //     })
                    //     .then(results=>dispatch(getUsersDescription(results)));

                    // console.log(resultDescription);
                    return Promise.all(allUsersDescription).then(results=>dispatch(getUsersDescription(results)))
                } 
            })
        }
}
