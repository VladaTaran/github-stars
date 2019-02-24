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

export function getUsersFailure(error) {
    return {
        type: 'GET_USERS_FAILURE',
        error
    }
}