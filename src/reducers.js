/**
 * Created by dileepkumar on 4/9/18.
 */
import * as ActionTypes from './actions';

export const initState = () => 0;

export const CounterReducer = (state = initState(), action) => {
  
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER:
      return state +1;
    case ActionTypes.DECREASE_COUNTER:
      return state -1;
    default:
      return state;
  }
}

export default ({
  counter: CounterReducer
})

