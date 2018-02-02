import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/indexReducer';
import * as actions from '../actions/indexActions';

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
