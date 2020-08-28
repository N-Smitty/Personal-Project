//create the initial state
const initialState = {
  user: {},
};

//action types
const UPDATE_USER = "UPDATE_USER";
const LOGOUT = 'LOGOUT';

// action builders
export function updateUser(data) {
  console.log(data, "daterrrr");
  return {
    type: UPDATE_USER,
    payload: data,
  };
};

export function logoutUser() {
  return {
    type: LOGOUT,
    payload: {}
  }
}

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      console.log(action.payload);
      // return Object.assign({}, state, action.payload);
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT:
      return initialState.user = {}
    default:
      return state;
  }
};