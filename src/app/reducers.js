import { combineReducers } from 'redux';

const CREATE_TODO = 'CREATE_TODO';

const testReducer = (state = {}, action) => {
  return state;
}

const todos = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [action.payload, ...state];
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  todos, testReducer
})
