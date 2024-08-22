import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'; // Update this line
import rootReducer from './reducer';

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)) // Use the new import here
);

export default store;
