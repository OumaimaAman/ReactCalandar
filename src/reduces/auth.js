const DEFAULT_STATE = {
  isAuthenticated: false,
  token :'',
  errorMessage: ''
}

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case "AUTH_SIGN_IN":
      return { ...state, isAuthenticated: true, errorMessage: '' }
    case "AUTH_ERROR":
      return { ...state, isAuthenticated : false, errorMessage: action.payload }
    default:
      return state
  }
}