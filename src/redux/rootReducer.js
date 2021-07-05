import { combineReducers } from 'redux';
import gitReducer from './slices/git';

const rootReducer = combineReducers({
    git: gitReducer,
  });
  
  export { rootReducer };