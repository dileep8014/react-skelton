/**
 * Created by dileepkumar on 4/10/18.
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { CounterReducer, initState } from '../../src/reducers';
import { getStore } from '../../__fixtures__/store';
import * as ActionTypes from '../../src/actions';

describe('redux.counter', () => {
  
  let store = null;
  
  beforeEach(() => {
    store = getStore({
      counter: initState()
    });
  });
  
  afterEach(() => {
    store = null;
  })
  
  it(("should increase the counter by 1"), () => {
    const type = ActionTypes.INCREASE_COUNTER
    expect(
      CounterReducer(initState(), {
        type
      })
    ).toEqual(1)
  })
  
  it(("should decrease the counter by 0"), () => {
    const type = ActionTypes.DECREASE_COUNTER
    expect(
      CounterReducer(1, {
        type
      })
    ).toEqual(0)
  })
  
});
