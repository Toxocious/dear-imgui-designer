import { combineReducers } from 'redux';

import { componentTreeReducer } from '../reducers/component-tree';

export const mainReducer = combineReducers({
  componentTree: componentTreeReducer,
});
