const initialState = {
    totalUsers: [],
    isLoaded: false,
    error: null
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
          return {
            ...state,
            isLoaded: true,
            error: null
          };
        case 'LOAD_SUCCESS':
        return {
            ...state,
            isLoaded: true,
            totalUsers: action.payload.users
        }
        case 'LOAD_REJECT':
          return {
              ...state,
              isLoaded: false,
              error: action.payload.error,
              totalUsers: []
          }
        default: return state;
    }
};

export default filtersReducer;