const DEFAULT_STATE = {
    data: ''
  }
  
  export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
      case "CALANDAR_DATA":
        return { ...state, data : action.payload }
      case "AUTH_ERROR":
        return { ...state, data : ''}
      default:
        return state
    }
  }