const initialData = {
    users: [],
    loading: false,
    error: "",
};

const SET_USERS = 'SET_USERS'

export const SetUsers = (users) => (dispatch) => {
    dispatch({
      type: SET_USERS,
      payload: users,
    });
};

export default function reducer(state = initialData, action) {
    switch (action.type) {
      case SET_USERS:
        return { ...state, users: action.payload };
      default:
        return state;
    }
}