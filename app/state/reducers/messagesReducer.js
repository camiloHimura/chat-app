import { ADD_MS } from '../actions/actions-types';

export default function messageReducer(state = [], action) {
  switch (action.type) {
    case ADD_MS:
      return [...state, action.payload];
    
    default: 
        return state;
  }
}