export function usersReducer (state = {usersList: [], usersDesc: [], error: false}, action){
    switch(action.type) {
        case 'USERS_LIST_DATA_SUCCESS':
            return {
                ...state,
                usersList: action.usersList
            };
        case 'USERS_DESCRIPTION_SUCCESS':
            return {
                ...state,
                usersDesc: action.usersDesc
            };
        case 'GET_USERS_FAILURE':
            return {
                ...state,
                error: true
            }
        default: 
            return state
    }
}
