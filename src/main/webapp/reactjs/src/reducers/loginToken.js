/// REDUCER
const loginTokenReducer = (state = '', action) => {
    switch(action.type) {
        case "SET_TOKEN":
          return state + 1;
        case "GET_TOKEN":
          return state;
        default:
          return state;
    }
}

export default loginTokenReducer;