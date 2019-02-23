export const loadUsers = () => ({
    type: 'LOADING'
});

export const successLoaded = users => ({
    type: 'LOAD_SUCCESS', 
    payload: { users }
});

export const rejectLoading = error => ({
    type: 'LOAD_REJECT',
    payload: { error }
});