import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { authentication } from './authentication.reducer';
import { user } from './user.reducer';

const rootReducer = combineReducers({
	form,
  authentication,
  user
});

export default rootReducer;