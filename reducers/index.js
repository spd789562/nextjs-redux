import { combineReducers } from 'redux';
import { ADDNUM } from '../actions';

const add = (state = 0, action) => {
  switch (action.type) {
    case ADDNUM:
      return state++;
    default:
      return state;
  }
};

const Appreducer = combineReducers({
  add
});

export default Appreducer;
