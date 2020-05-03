/// REDUCER
const userTokenReducer = (state = '', action) => {

    console.log(action.previousState);

    switch(action.type) {
        case "SET_TOKEN":
          return {
            userToken: action.token,
            loggedIn: true
          }
        case "REMOVE_TOKEN":
          return {
            userToken: '',
            loggedIn: false
          }
        default:
          return state;
    }
}

export default userTokenReducer;