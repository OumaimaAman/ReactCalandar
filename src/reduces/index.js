import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authRedux from './auth';
import calRedux from './calandar';


export default combineReducers({
  form: formReducer,
  auth : authRedux,
  cal : calRedux
});