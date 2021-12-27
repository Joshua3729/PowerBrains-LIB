const initialState = {
  token: null,
  isAdmin: false,
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "token":
      return {
        ...state,
        token: action.value,
      };
    case "isAdmin":
      return {
        ...state,
        isAdmin: action.value,
      };
    case "isAuth":
      return {
        ...state,
        isAuth: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
