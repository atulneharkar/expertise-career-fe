import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { authentication } from './authentication.reducer';
import { user } from './user.reducer';
import { contactUs } from './contact-us.reducer';
import { trending } from './trending.reducer';
import { course } from './course.reducer';

const rootReducer = combineReducers({
	form,
  authentication,
  user,
  contactUs,
  trending,
  course
});

export default rootReducer;