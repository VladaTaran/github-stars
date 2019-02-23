export function usersList (state = {usersList: [], usersDesc: [], bio:'', usersStars:[]} , action) {
    switch(action.type) {
        case 'USERS_LIST_DATA_SUCCESS':
            return {
                ...state,
                usersList: action.usersList
            };
        case 'USERS_DESCRIPTION_SUCCESS':
        // console.log('This is action ', action.usersDesc.bio)
            return {
                ...state,
                usersDesc: action.usersDesc
            };
        case 'USERS_STARS_SUCCESS':
            return {
                ...state,
                usersStars: action.usersStars
            }
        default: 
            return state
    }
}
